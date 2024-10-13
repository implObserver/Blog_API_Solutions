import asyncHandler from 'express-async-handler';
import { body, validationResult } from 'express-validator';
import fs from 'fs';
import path from 'path';
import { prismaDB } from '../../../../database/prisma/queries.js';
import { validateComment } from '../../helper/validation/commentValidation.js';

const comment_of_user_delete = [
  asyncHandler(async (req, res, next) => {
    const params = req.params;
    const userid = req.user.id;
    const comment = {
      postid: parseInt(params.postid),
      commentid: parseInt(params.commentid),
    };
    console.log(
      `ВНИМАНИЕ: пост ${comment.postid}, юзер ${userid} коммент ${comment.commentid}`
    );
    await prismaDB.removeComment(userid, comment);
    const totalComments = await prismaDB.countComments(comment.postid);
    res.json({
      totalComments,
    });
  }),
];

export const deleteController = {
  comment_of_user_delete,
};
