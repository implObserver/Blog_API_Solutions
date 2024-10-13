import asyncHandler from 'express-async-handler';
import { prismaDB } from '../../../../database/prisma/queries.js';
import { body, validationResult } from 'express-validator';
import { sanitizeInput } from '../../helper/validation/postValidation.js';

const user_post_add_post = [
  body('title')
    .isString()
    .notEmpty()
    .withMessage('title не может быть пустым')
    .custom((value) => sanitizeInput(value)),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ error: errors.errors[0].msg });
    }

    let user = req.user;
    const title = req.body.title;
    await prismaDB.addPost(user, title);
    user = await prismaDB.findUser(req.user.id);
    res.locals.user = user;
    next();
  }),
];

const image_update_post = asyncHandler(async (req, res) => {
  res.json('done');
});

export const postController = {
  user_post_add_post,
  image_update_post,
};
