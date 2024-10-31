import asyncHandler from 'express-async-handler';
import { deleteAllFilesInFolder } from '../../../../app/cloudStore/yandexStorage/yandexStorage.js';
import { prismaDB } from '../../../../database/prisma/queries/queries.js';

const image_of_post_delete = asyncHandler(async (req, res) => {
  const postid = req.params.postid;
  const folderName = req.params.nameFolder;
  const folderPath = `images/${postid}/${folderName}`;
  await deleteAllFilesInFolder('blog-api-store', folderPath);
});

const post_delete = asyncHandler(async (req, res, next) => {
  const postId = req.params.postid;
  const folderPath = `images/${postId}/`;
  await prismaDB.deletePost(req.user.id, postId);
  const totalPosts = await prismaDB.countUserPost(req.user.id);
  await deleteAllFilesInFolder('blog-api-store', folderPath);
  res.json({
    totalPosts,
  });
});

export const deleteController = {
  image_of_post_delete,
  post_delete,
};
