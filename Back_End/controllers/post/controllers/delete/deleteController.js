import asyncHandler from 'express-async-handler';
import { prismaDB } from '../../../../database/prisma/queries.js';
import { __dirname } from '../../../../app/dirname/dirname.js';
import fs from 'fs';

const image_of_post_delete = asyncHandler(async (req, res) => {
  const namefolder = req.params.nameFolder;
  const folderPath = `${__dirname}/public/images/${namefolder}`;
  console.log(folderPath);
  if (!fs.existsSync(folderPath)) {
    return res.status(404).json({ message: 'Папка не найдена' });
  }

  try {
    fs.rmSync(folderPath, { recursive: true, force: true });
    console.log('Папка успешно удалена');
    res.status(200).json({ message: 'Папка удалена' });
  } catch (error) {
    console.error('Ошибка при удалении папки:', error);
    res.status(500).json({ message: 'Ошибка при удалении папки' });
  }
});

const post_delete = asyncHandler(async (req, res, next) => {
  const postId = req.params.postid;
  await prismaDB.deletePost(req.user.id, postId);
  const totalPosts = await prismaDB.countUserPost(req.user.id);
  res.json({
    totalPosts,
  });
});

export const deleteController = {
  image_of_post_delete,
  post_delete,
};
