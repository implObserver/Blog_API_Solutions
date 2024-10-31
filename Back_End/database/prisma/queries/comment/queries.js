import { prisma } from '../../getClient.js';

const getPaginationComments = async (offset, limit, postid) => {
  return prisma.comment.findMany({
    skip: offset,
    take: limit,
    where: { postId: postid },
    orderBy: {
      postingDate: 'desc',
    },
    include: {
      user: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  });
};

const countComments = async (postId) => {
  return await prisma.comment.count({
    where: {
      postId: postId,
    },
  });
};

const addComment = async (userId, comment) => {
  const text = comment.text;
  const postId = parseInt(comment.post_id);

  if (!text || isNaN(postId)) {
    console.error('Ошибка: текст комментария и ID поста обязательны.');
    return;
  }

  try {
    const res = await prisma.comment.create({
      data: {
        text: text,
        user: {
          connect: {
            id: userId,
          },
        },
        post: {
          connect: {
            id: postId,
          },
        },
      },
    });

    console.log('Комментарий добавлен:', res);
    return res;
  } catch (error) {
    console.error('Ошибка при добавлении комментария:', error);
    throw error;
  }
};

const updateComment = async (userId, comment) => {
  const text = comment.text;
  const postId = parseInt(comment.post_id);
  const commeintId = parseInt(comment.id);
  if (!text || isNaN(postId)) {
    console.error('Ошибка: текст комментария и ID поста обязательны.');
    return;
  }

  try {
    const res = await prisma.comment.update({
      where: {
        userId: userId,
        postId: postId,
        id: commeintId,
      },
      data: {
        text: text,
        isUpdate: true,
        updatingDate: new Date(),
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });

    console.log('Комментарий обновлен:', res);
    return res;
  } catch (error) {
    console.error('Ошибка при обновлении комментария:', error);
    throw error;
  }
};

const removeComment = async (userId, comment) => {
  const postId = comment.postid;
  const commeintId = comment.commentid;
  const res = await prisma.comment.delete({
    where: {
      userId: userId,
      postId: postId,
      id: commeintId,
    },
  });

  console.log('Комментарий удален:', res);
};

export const commentQueries = {
  getPaginationComments,
  countComments,
  addComment,
  updateComment,
  removeComment,
};
