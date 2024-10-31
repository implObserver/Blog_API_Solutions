import { prisma } from '../../getClient.js';

const getPaginationPostsOfUser = async (id, offset, limit) => {
  const posts = await prisma.post.findMany({
    skip: offset,
    take: limit,
    orderBy: {
      postingDate: 'desc',
    },
    where: { userId: id },
  });
  return posts;
};

const getPaginationPosts = async (offset, limit) => {
  return prisma.post.findMany({
    skip: offset,
    take: limit,
    where: {
      isPublished: true,
    },
    include: {
      user: {
        select: {
          id: true,
          username: true,
        },
      },
      comments: {
        include: {
          user: {
            select: {
              id: true,
              username: true,
            },
          },
        },
      },
    },
  });
};

const countPost = async () => {
  return await prisma.post.count({
    where: {
      isPublished: true,
    },
  });
};

const countUserPost = async (id) => {
  return await prisma.post.count({
    where: {
      userId: id,
    },
  });
};

const findPostToId = async (postid) => {
  const post = await prisma.post.findUnique({
    where: { id: postid },
    include: {
      comments: {
        include: {
          user: {
            select: {
              id: true,
              username: true,
            },
          },
        },
      },
    },
  });

  return post;
};

const addPost = async (user, title) => {
  const date = Date.now();

  const defaultModels = [
    {
      id: 0,
      type: 'main_title',
      value: '',
      fontSize: 1,
    },
    {
      id: 1,
      type: 'preview',
      imageUrl: `${date}`,
      version: `${date}`,
    },
    {
      id: 2,
      type: 'text',
      value: '',
    },
  ];

  try {
    await prisma.post.create({
      data: {
        title,
        user: {
          connect: { id: user.id },
        },
        models: defaultModels,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateModels = async (data) => {
  const id = data.id;
  const models = data.models;
  try {
    await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        models: {
          set: models,
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateTag = async (user_id, post_id, tag) => {
  const updatedPost = await prisma.post.update({
    where: {
      id: post_id,
      userId: user_id,
    },
    data: {
      tag: tag,
    },
  });

  return updatedPost;
};

const updatePublishStatus = async (user_id, post_id, status) => {
  const updatedPost = await prisma.post.update({
    where: {
      id: post_id,
      userId: user_id,
    },
    data: {
      isPublished: status,
    },
  });

  return updatedPost;
};

const updateAuthor = async (user_id, post_id, author) => {
  const updatedPost = await prisma.post.update({
    where: {
      id: post_id,
      userId: user_id,
    },
    data: {
      author: author,
    },
  });

  return updatedPost;
};

const updateTitle = async (user_id, post_id, title) => {
  console.log(user_id, post_id, title);
  const updatedPost = await prisma.post.update({
    where: {
      id: post_id,
      userId: user_id,
    },
    data: {
      title: title,
    },
  });

  return updatedPost;
};

const updatePost = async (userid, post) => {
  const updatedPost = prisma.post.update({
    where: {
      userId: userid,
      id: post.id,
    },
    data: {
      ...post,
    },
  });
  return updatedPost;
};

const deletePost = async (userid, postId) => {
  const numericPostId = parseInt(postId, 10);
  await prisma.post.delete({
    where: {
      id: numericPostId,
      userId: userid,
    },
  });
};

export const postQueries = {
  getPaginationPosts,
  getPaginationPostsOfUser,
  countPost,
  countUserPost,
  findPostToId,
  addPost,
  updateModels,
  updateTag,
  updatePublishStatus,
  updateAuthor,
  updateTitle,
  updatePost,
  deletePost,
};
