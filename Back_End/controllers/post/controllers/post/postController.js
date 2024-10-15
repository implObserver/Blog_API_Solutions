import asyncHandler from 'express-async-handler';
import { prismaDB } from '../../../../database/prisma/queries.js';
import { body, validationResult } from 'express-validator';
import { sanitizeInput } from '../../helper/validation/postValidation.js';

const user_post_add_post = [
  body('title')
    .isString()
    .notEmpty()
    .withMessage('title не может быть пустым')
    .isLength({ min: 1, max: 30 })
    .withMessage('Название слишком длинное или короткое')
    .custom((value) => sanitizeInput(value)),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ error: errors.errors[0].msg });
    }

    const user = req.user;
    const title = req.body.title;
    await prismaDB.addPost(user, title);
    const totalPosts = await prismaDB.countUserPost(user.id);

    res.json({
      totalPosts,
    });
  }),
];

const image_update_post = asyncHandler(async (req, res) => {
  res.json('done');
});

export const postController = {
  user_post_add_post,
  image_update_post,
};
