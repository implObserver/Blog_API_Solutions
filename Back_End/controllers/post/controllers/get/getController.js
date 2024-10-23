import asyncHandler from 'express-async-handler';
import { __dirname } from '../../../../app/dirname/dirname.js';
import fs from 'fs';
import path from 'path';
import { prismaDB } from '../../../../database/prisma/queries.js';

const pagination_posts_of_user_get = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1; // Текущая страница
  const limit = 5; // Количество постов на странице
  const offset = (page - 1) * limit; // Смещение для базы данных
  try {
    const posts = await prismaDB.getPaginationPostsOfUser(
      req.user.id,
      offset,
      limit
    );
    const totalPosts = await prismaDB.countUserPost(req.user.id);
    res.json({
      posts,
      totalPosts,
      totalPages: Math.max(1, Math.ceil(totalPosts / limit)),
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Ошибка при получении постов' });
  }
});

const posts_to_id_get = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.postid);
  const post = await prismaDB.findPostToId(id);
  res.json({
    post,
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
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  try {
    const posts = await prismaDB.getPaginationPosts(offset, limit);
    const totalPosts = await prismaDB.countPost();
    res.json({
      posts,
      totalPosts,
      totalPages: Math.max(1, Math.ceil(totalPosts / limit)),
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Ошибка при получении постов' });
  }
});

const image_of_post_get = asyncHandler(async (req, res) => {
  const folderName = req.params.imageid;
  const defaultFolderPath = `${__dirname}/public/images/default/post/defaultPost.svg`;
  const folderPath = `${__dirname}/public/images/${folderName}`;
  let filePath;
  let extname;
  fs.readdir(folderPath, (err, files) => {
    if (err || files.length === 0) {
      filePath = defaultFolderPath;
      extname = '.svg';
    } else {
      filePath = path.join(folderPath, files[0]);
      extname = path.extname(files[0]).toLowerCase();
    }

    fs.stat(filePath, (err, stats) => {
      if (err) {
        return res.status(500).send('Ошибка при получении метаданных файла');
      }

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
      res.set('Last-Modified', stats.mtime.getTime());
      res.sendFile(filePath);
    });
  });
});

const last_modifier_image_of_post_get = asyncHandler(async (req, res) => {
  const folderName = req.params.imageid;
  const folderPath = `${__dirname}/public/images/${folderName}`;

  fs.readdir(folderPath, (err, files) => {
    if (err || !files || files.length === 0) {
      return res.json({ error: 'Ошибка при получении данных' });
    }

    const filePath = path.join(folderPath, files[0]);

    fs.stat(filePath, (err, stats) => {
      if (err) {
        return res
          .status(500)
          .json({ message: 'Ошибка при получении метаданных файла' });
      }

      res.json({ lastModified: stats.mtime.getTime() });
    });
  });
});

export const getController = {
  posts_list_api,
  pagination_posts_of_user_get,
  image_of_post_get,
  pagination_posts_list_get,
  posts_to_id_get,
  last_modifier_image_of_post_get,
};
