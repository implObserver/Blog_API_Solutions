import asyncHandler from 'express-async-handler';
import { __dirname } from '../../../../app/dirname/dirname.js';
import fs from 'fs';
import path from 'path';
import { prismaDB } from '../../../../database/prisma/queries.js';

const pagination_comments_get = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit; // Смещение для базы данных
  const postid = parseInt(req.query.postid);

  try {
    const comments = await prismaDB.getPaginationComments(
      offset,
      limit,
      postid
    );

    const totalComments = await prismaDB.countComments(postid);

    res.json({
      comments,
      totalComments,
      totalPages: Math.ceil(totalComments / limit),
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Ошибка при получении комментариев' });
  }
});

export const getController = {
  pagination_comments_get,
};
