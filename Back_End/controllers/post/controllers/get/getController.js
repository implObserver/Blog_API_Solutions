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
  const allPostPg = await prismaDB.getAllPosts();
  res.json({
    title: 'Post List',
    post_list_pg: allPostPg,
  });
});

const image_of_post_get = asyncHandler(async (req, res) => {
  const folderName = req.params.imageid;
  const folderPath = `${__dirname}/public/images/${req.user.id}/${folderName}`;

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.log(err);
      return res.json({ message: 'Папка не найдена' });
    }

    if (files.length === 0) {
      return res.json({ message: 'Папка пуста' });
    }
    const filePath = path.join(folderPath, files[0]);
    const extname = path.extname(files[0]).toLowerCase();

    let contentType = 'application/octet-stream';

    switch (extname) {
      case '.avif':
        contentType = 'image/avif';
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
};
