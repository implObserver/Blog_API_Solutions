import asyncHandler from 'express-async-handler';
import { prismaDB } from '../../../../database/prisma/queries.js';
import { body, validationResult } from 'express-validator';
import {
  sanitizeInput,
  validateModels,
} from '../../helper/validation/postValidation.js';

const post_update_put = [
  body('models')
    .optional()
    .isArray()
    .withMessage('models должно быть массивом')
    .custom(validateModels),

  body('id')
    .exists()
    .withMessage('post_id должен существовать')
    .isNumeric()
    .withMessage('post_id должен быть числом'),

  body('tag')
    .isIn(['Other', 'Travel', 'Sport', 'Tech', 'Books'])
    .withMessage('Tag must be specified.'),

  body('author')
    .isString()
    .notEmpty()
    .withMessage('author не может быть пустым')
    .isLength({ min: 1, max: 20 })
    .withMessage('Имя слишком длинное')
    .custom((value) => sanitizeInput(value)),

  body('title')
    .isString()
    .withMessage('title должен быть строкой')
    .notEmpty()
    .withMessage('title не может быть пустым')
    .isLength({ min: 1, max: 30 })
    .withMessage('Название слишком длинное или короткое')
    .custom((value) => sanitizeInput(value))
    .withMessage('sanitize error'),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    console.log(req.body);
    if (!errors.isEmpty()) {
      console.log(errors.errors[0].msg);
      return res.status(400).send({ error: errors.errors[0].msg });
    }
    const post = req.body;
    const updatedPost = await prismaDB.updatePost(req.user.id, post);
    res.json({
      updatedPost,
    });
  }),
];

const post_update_models_put = [
  body('models')
    .optional()
    .isArray()
    .withMessage('models должно быть массивом')
    .custom(validateModels),

  body('postid')
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
    await prismaDB.updateModelsOfPost(req.user, snapshot);
    res.json('done');
  }),
];

const post_update_tag_put = [
  body('postid')
    .exists()
    .withMessage('post_id должен существовать')
    .isNumeric()
    .withMessage('post_id должен быть числом'),
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
    const post_id = req.body.postid;
    const user_id = req.user.id;
    const updatedPost = await prismaDB.updateTag(user_id, post_id, tag);

    res.json({
      updatedPost,
    });
  }),
];

const post_update_author_put = [
  body('postid')
    .exists()
    .withMessage('postid должен существовать')
    .isNumeric()
    .withMessage('postid должен быть числом'),
  body('author')
    .isString()
    .notEmpty()
    .withMessage('author не может быть пустым')
    .isLength({ min: 1, max: 20 })
    .withMessage('Имя слишком длинное')
    .custom((value) => sanitizeInput(value)),

  asyncHandler(async (req, res, next) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.errors[0].msg);
      return res.status(400).send({ error: errors.errors[0].msg });
    }
    console.log(req.body);
    const author = req.body.author;
    const post_id = req.body.postid;
    const user_id = req.user.id;
    const updatedPost = await prismaDB.updateAuthor(user_id, post_id, author);

    res.json({
      updatedPost,
    });
  }),
];

const post_update_title_put = [
  body('postid')
    .exists()
    .withMessage('postid должен существовать')
    .isNumeric()
    .withMessage('postid должен быть числом'),
  body('title')
    .isString()
    .withMessage('title должен быть строкой')
    .notEmpty()
    .withMessage('title не может быть пустым')
    .isLength({ min: 1, max: 30 })
    .withMessage('Название слишком длинное или короткое')
    .custom((value) => sanitizeInput(value))
    .withMessage('sanitize error'),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ error: errors.errors[0].msg });
    }
    const title = req.body.title;
    const post_id = req.body.postid;
    const user_id = req.user.id;
    const updatedPost = await prismaDB.updateTitle(user_id, post_id, title);

    res.json({
      updatedPost,
    });
  }),
];

const post_update_publish_status_put = [
  body('postid').isInt().withMessage('post_id должен быть целым числом'),
  body('status')
    .isIn(['true', 'false'])
    .withMessage('Status must be specified.'),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(req.body);
      return res.status(400).send({ error: errors.errors[0].msg });
    }
    const status = req.body.status;
    const post_id = req.body.postid;
    const user_id = req.user.id;
    const updatedPost = await prismaDB.updatePublishStatus(
      user_id,
      post_id,
      status
    );
    res.json({
      updatedPost,
    });
  }),
];

export const putController = {
  post_update_models_put,
  post_update_tag_put,
  post_update_publish_status_put,
  post_update_author_put,
  post_update_title_put,
  post_update_put,
};
