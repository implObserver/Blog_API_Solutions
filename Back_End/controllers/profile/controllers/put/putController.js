import asyncHandler from 'express-async-handler';
import { body, validationResult } from 'express-validator';
import { handleAvatarUpload } from '../../helper/middlewares/multer/avatarMulter.js';
import { prismaDB } from '../../../../database/prisma/queries/queries.js';

const user_profile_update_put = [
  body('name')
    .optional()
    .isString()
    .isLength({ min: 1 })
    .trim()
    .withMessage('Nickname must be specified.'),
  body('age')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Age must be specified.'),
  body('gender')
    .optional()
    .isIn(['male', 'female', 'other'])
    .withMessage('Gender must be specified.'),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).send({ error: errors.errors[0].msg });
    }

    let user = req.user;
    const profile = req.body;
    await prismaDB.updateProfile(user, profile);
    user = await prismaDB.findUser(user.id);
    res.locals.user = user;
    next();
  }),
];

const user_avatar_update_put = [
  asyncHandler(async (req, res, next) => {
    const fileUrl = await handleAvatarUpload(req, res);
    await prismaDB.updateAvatar(req.user.id, fileUrl);
    const user = req.user;
    res.locals.user = user;
    next();
  }),
];

export const putController = {
  user_profile_update_put,
  user_avatar_update_put,
};
