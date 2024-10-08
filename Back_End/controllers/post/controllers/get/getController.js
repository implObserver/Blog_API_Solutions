import asyncHandler from 'express-async-handler';
import { __dirname } from '../../../../app/dirname/dirname.js';
import fs from 'fs';
import path from 'path';
import { prismaDB } from '../../../../database/prisma/queries.js';

const posts_of_user_get = asyncHandler(async (req, res, next) => {
  const posts = await prismaDB.findPosts(req.user.id);
  if (posts === null) {
    const err = new Error('Posts not found');
    err.status = 404;
    return next(err);
  }

  res.json({
    title: 'Posts Detail',
    posts,
  });
});

const posts_list_api = asyncHandler(async (req, res) => {
  const allPost = await prismaDB.getAllPosts();
  res.json({
    title: 'Post List',
    posts_list: allPost,
  });
});

const pagination_posts_list_get = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Текущая страница
  const limit = parseInt(req.query.limit) || 10; // Количество постов на странице
  const offset = (page - 1) * limit; // Смещение для базы данных

  try {
    const posts = await prismaDB.getPaginationPosts(offset, limit);

    const totalPosts = await prismaDB.countPost(); // Общее количество постов

    res.json({
      posts,
      totalPosts,
      totalPages: Math.ceil(totalPosts / limit),
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Ошибка при получении постов' });
  }
});

const image_of_post_get = asyncHandler(async (req, res) => {
  const folderName = req.params.imageid;
  const defaultFolderPath = `${__dirname}/public/images/default/post/defaultPost.svg`;
  const folderPath = `${__dirname}/public/images/${req.user.id}/${folderName}`;
  let filePath;
  let extname;
  fs.readdir(folderPath, (err, files) => {
    let isEmpty;
    let isError;
    let isEmptyError;

    if (err) {
      isError = true;
      isEmpty = err.message.includes('no such file or directory');
      isEmptyError = isEmpty && isError;
      if (isEmptyError || files.length === 0) {
        filePath = defaultFolderPath;
        extname = '.svg';
      }
    } else {
      filePath = path.join(folderPath, files[0]);
      extname = path.extname(files[0]).toLowerCase();
    }
    console.log(filePath);
    console.log(extname);
    let contentType = 'application/octet-stream';

    switch (extname) {
      case '.avif':
        contentType = 'image/avif';
        break;
      case '.webp':
        contentType = 'image/webp';
        break;
      case '.jpeg':
      case '.jpg':
        contentType = 'image/jpeg';
        break;
      case '.png':
        contentType = 'image/png';
        break;
      case '.svg':
        contentType = 'image/svg+xml';
        break;
      default:
        return res.status(415).send('Unsupported Media Type');
    }

    res.set('Content-Type', contentType);
    res.sendFile(filePath);
  });
});

export const getController = {
  posts_list_api,
  posts_of_user_get,
  image_of_post_get,
  pagination_posts_list_get,
};
