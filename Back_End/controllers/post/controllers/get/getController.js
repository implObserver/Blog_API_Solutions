import asyncHandler from 'express-async-handler';
import { __dirname } from '../../../../app/dirname/dirname.js';
import fs from 'fs';
import path from 'path';
import { prismaDB } from '../../../../database/prisma/queries.js';
import {
  getFileFromBucket,
  getFileFromFolder,
  getObjectMetadata,
} from '../../../../app/cloudStore/yandexStorage/yandexStorage.js';
import { getContentTypeByExtension } from '../../helper/getters/getContentTypeByExtension.js';

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
  const postid = req.params.postid;
  const folderName = req.params.folderName;
  const folderPath = `images/${postid}/${folderName}`;
  const defaultPath = 'images/default/';
  const defaultImageUrl =
    'https://blog-api-store.storage.yandexcloud.net/images/default/defaultPost.svg';
  try {
    const fileBuffer = await getFileFromFolder('blog-api-store', folderPath);
    const metaData = await getObjectMetadata('blog-api-store', folderPath);
    const contentType = metaData.ContentType;
    res.setHeader('Last-Modified', metaData.LastModified.getTime());
    res.setHeader('Content-Type', contentType);
    res.setHeader(
      'Content-Disposition',
      `inline; filename="${path.basename(folderPath)}"`
    );

    res.status(200).send(fileBuffer);
  } catch (error) {
    console.error('Ошибка при получении изображения:', error.message);

    try {
      const defaultImageBuffer = await getFileFromBucket(
        'blog-api-store',
        defaultImageUrl
      );
      const metaData = await getObjectMetadata('blog-api-store', defaultPath);
      res.setHeader('Last-Modified', metaData.LastModified.getTime());
      res.setHeader('Content-Type', 'image/svg+xml');
      res.setHeader('Content-Disposition', 'inline; filename="default.svg"');

      res.status(200).send(defaultImageBuffer);
    } catch (defaultError) {
      console.error(
        'Ошибка при загрузке дефолтного изображения:',
        defaultError.message
      );
      res.status(500).json({
        message: 'Ошибка при загрузке изображения и дефолтного изображения',
        error: defaultError.message,
      });
    }
  }
});

const last_modifier_image_of_post_get = asyncHandler(async (req, res) => {
  const postid = req.params.postid;
  const folderName = req.params.folderName;
  const folderPath = `images/${postid}/${folderName}`;
  const defaultPath = 'images/default/';
  let metaData = await getObjectMetadata(
    'blog-api-store',
    folderPath,
    defaultPath
  );

  res.json({ lastModified: metaData.LastModified.getTime() });
});

export const getController = {
  posts_list_api,
  pagination_posts_of_user_get,
  image_of_post_get,
  pagination_posts_list_get,
  posts_to_id_get,
  last_modifier_image_of_post_get,
};
