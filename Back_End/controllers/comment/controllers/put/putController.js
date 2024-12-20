import asyncHandler from 'express-async-handler';
import { body, validationResult } from 'express-validator';
import { validateComment } from '../../helper/validation/commentValidation.js';
import { io } from '../../../../bin/server/server.js';
import { prismaDB } from '../../../../database/prisma/queries/queries.js';

const comment_of_user_put = [
  body('text')
    .trim()
    .isLength({ min: 1, max: 1500 })
    .escape()
    .withMessage('Text of comment must be specified.')
    .custom(validateComment),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ error: errors.errors[0].msg });
    }
    const userid = req.user.id;
    const comment = req.body;
    const postid = parseInt(comment.post_id);
    console.log(`ВНИМАНИЕ: пост ${postid}, юзер ${userid} коммент ${comment}`);
    const updatedComment = await prismaDB.updateComment(userid, comment);
    io.emit('updateComment', updatedComment);
    res.json({
      isUpdate: true,
      date: new Date(),
      updatedComment,
    });
  }),
];

export const putController = {
  comment_of_user_put,
};
