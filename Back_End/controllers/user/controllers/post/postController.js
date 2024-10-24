import { body, validationResult } from 'express-validator';
import asyncHandler from 'express-async-handler';
import passport from 'passport';
import bcrypt from 'bcryptjs';
import { getRefreshToken } from '../../../../app/use/dev/auth/token/JWT/issueJWT.js';
import { prismaDB } from '../../../../database/prisma/queries.js';
import { validateUsernameOrMail } from '../../helper/middlewares/validate/usernameOrMailValidation.js';

const user_create_post = [
  body('username')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long.')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage(
      'Username must contain only letters, numbers, and underscores.'
    )
    .escape(),
  body('email').isEmail().withMessage('Invalid email address.'),
  body('password')
    .trim()
    .isLength({ min: 8 })
    .escape()
    .withMessage('Password must be specified.'),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const hashPassword = await bcrypt.hash(req.body.password, 10);

    const userPg = {
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    };

    if (!errors.isEmpty()) {
      return res.status(400).send({ error: errors.errors[0].msg });
    } else {
      const checkEmail = await prismaDB.findUserByEmail(userPg.email);
      const checkUsername = await prismaDB.findUserByUsername(userPg.username);
      if (checkEmail || checkUsername) {
        return res
          .status(403)
          .send({ error: 'такой пользователь уже существует' });
      }

      const id = await prismaDB.setNewUser(userPg);
      const refreshToken = getRefreshToken(id).token;
      await prismaDB.setToken(id, refreshToken);
      const user = await prismaDB.findUser(id);
      res.locals.user = user;
      res.locals.refreshToken = refreshToken;
      next();
    }
  }),
];

const user_auth_post = [
  body('identifier').custom(validateUsernameOrMail),
  body('password')
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage('Password must be specified.'),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ error: errors.errors[0].msg });
    } else {
      await passport.authenticate('local', (err, user, info) => {
        if (err) {
          console.error('Authentication error 1:', err); // Логирование ошибки
          return res.status(500).json({ error: 'Internal server error' });
        }
        if (!user) {
          return res
            .status(info.status || 400) // Устанавливаем статус по умолчанию
            .json({ error: info.error || info.message });
        }
        req.logIn(user, (loginErr) => {
          if (loginErr) {
            console.error('Authentication error 2:', err); // Логирование ошибки
            return res.status(500).json({ error: 'Login failed' });
          }
          console.log('Successfully authenticated:');
          return next();
        });
      })(req, res, next);
    }
  }),
];

const user_logout_post = asyncHandler(async (req, res) => {
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  res.clearCookie('user_id');
  res.clearCookie('connect.sid', { path: '/' });
  res.json({ res: 'logout' });
});

const user_auth_jwt_protected = async (req, res, next) => {
  try {
    passport.authenticate('jwt', {
      session: false,
    })(req, res, next);
  } catch (err) {
    console.log(err);
  }
};

export const postController = {
  user_create_post,
  user_auth_post,
  user_logout_post,
  user_auth_jwt_protected,
};
