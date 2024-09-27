import { body, validationResult } from 'express-validator';
import asyncHandler from 'express-async-handler';
import passport from 'passport';
import bcrypt from 'bcryptjs';
import { getRefreshToken } from '../../../../app/use/dev/auth/token/JWT/issueJWT.js';
import { prismaDB } from '../../../../database/prisma/queries.js';

const user_create_post = [
  body('email').isEmail().withMessage('Invalid email address.'),
  body('password')
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage('Password must be specified.'),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const hashPassword = await bcrypt.hash(req.body.password, 10);

    const userPg = {
      email: req.body.email,
      password: hashPassword,
    };

    if (!errors.isEmpty()) {
      return res.status(400).send({ error: errors.errors[0].msg });
    } else {
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
  body('email').isEmail().withMessage('Invalid email address.'),
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
          return res.status(500).json({ error: 'Internal server error' });
        }
        if (!user) {
          return res.status(401).json({ error: info.error || info.message });
        }
        req.logIn(user, (loginErr) => {
          if (loginErr) {
            return res.status(500).json({ error: 'Login failed' });
          }
          console.log('Successfully authenticated:', user);
          return next();
        });
      })(req, res, next);
    }
  }),
];

const user_logout_post = asyncHandler(async (req, res) => {
  res.clearCookie('acessToken');
  res.clearCookie('token');
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
