import asyncHandler from 'express-async-handler';
import { prismaDB } from '../../../../database/prisma/queries.js';
import { body, validationResult } from 'express-validator';
import { validateElements } from '../../helper/validation/postValidation.js';

const user_post_update_put = [
  body('elements')
    .optional()
    .isArray()
    .withMessage('elements должно быть массивом')
    .custom(validateElements),

  body('post_id')
    .exists()
    .withMessage('post_id должен существовать')
    .isNumeric()
    .withMessage('post_id должен быть числом'),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ error: errors.errors[0].msg });
    }
    const snapshot = req.body;
    console.log(snapshot);
    await prismaDB.updatePost(req.user, snapshot);
    res.json('done');
  }),
];

const post_update_tag_put = [
  body('post_id').isInt().withMessage('post_id должен быть целым числом'),
  body('tag')
    .isIn(['Other', 'Travel', 'Sport', 'Tech', 'Books'])
    .withMessage('Tag must be specified.'),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.errors[0].msg);
      return res.status(400).send({ error: errors.errors[0].msg });
    }
    const tag = req.body.tag;
    const post_id = req.body.post_id;
    const user_id = req.user.id;
    await prismaDB.updateTag(user_id, post_id, tag);
    const user = await prismaDB.findUser(user_id);
    res.locals.user = user;
    next();
  }),
];

const post_update_publish_status_put = [
  body('post_id').isInt().withMessage('post_id должен быть целым числом'),
  body('status')
    .isIn(['true', 'false'])
    .withMessage('Status must be specified.'),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.errors[0].msg);
      return res.status(400).send({ error: errors.errors[0].msg });
    }
    const status = req.body.status;
    const post_id = req.body.post_id;
    const user_id = req.user.id;
    await prismaDB.updatePublishStatus(user_id, post_id, status);
    const user = await prismaDB.findUser(user_id);
    res.locals.user = user;
    next();
  }),
];

export const putController = {
  user_post_update_put,
  post_update_tag_put,
  post_update_publish_status_put,
};
