import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

const getPaginationPostsOfUser = async (id, offset, limit) => {
  const posts = await prisma.post.findMany({
    skip: offset,
    take: limit,
    orderBy: {
      postingDate: 'desc', // Сортируем по полю createdAt в порядке убывания
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
          // Используем select, чтобы ограничить возвращаемые поля
          profile: {
            // Включаем только профиль
            select: {
              name: true, // Выбираем только поле name из модели Profile
            },
          },
        },
      },
      comments: {
        include: {
          user: {
            select: {
              // Используем select, чтобы ограничить возвращаемые поля
              profile: {
                // Включаем только профиль
                select: {
                  name: true, // Выбираем только поле name из модели Profile
                },
              },
            },
          },
        },
      },
    },
  });
};

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

const countComments = async (postId) => {
  return await prisma.comment.count({
    where: {
      postId: postId,
    },
  });
};
const dropUsers = async () => {
  await prisma.user.findMany({});
  await prisma.comment.findMany({});
  await prisma.profile.findMany({});
  await prisma.post.findMany({});
  //await prisma.$queryRaw('DROP schema users CASCADE')
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

const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const getAllPosts = async () => {
  const posts = await prisma.post.findMany({
    include: {
      comments: true,
    },
  });
  return posts;
};

const setNewUser = async (user) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        email: user.email,
        username: user.username,
        password: user.password,
        isAdmin: false,
      },
    });

    await prisma.profile.create({
      data: {
        user: {
          connect: { id: newUser.id },
        },
        avatar: `public/images/${newUser.id}/avatar/`,
      },
    });

    return newUser.id;
  } catch (error) {
    console.log(error);
  }
};

const updateAvatar = async (id) => {
  await prisma.profile.update({
    where: { userId: id },
    data: {
      avatar: `public/images/${id}/avatar/`,
    },
  });
};

const setToken = async (id, token) => {
  await prisma.user.update({
    where: { id: id },
    data: {
      refreshToken: token,
    },
  });
};

const findUser = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id: id },
    include: {
      profile: true,
      posts: true,
      comments: true,
    },
  });
  return user;
};

const setVerify = async (id) => {
  await prisma.user.update({
    where: { id: id },
    data: {
      isVerified: true,
    },
  });
};

const setVerifyCode = async (id, code) => {
  await prisma.user.update({
    where: { id: id },
    data: {
      verifyCode: code,
    },
  });
};

const findProfile = async (id) => {
  const profile = await prisma.profile.findUnique({
    where: { userId: id },
  });
  return profile;
};

const findPostToId = async (postid) => {
  const post = await prisma.post.findUnique({
    where: { id: postid },
    include: {
      comments: {
        include: {
          user: {
            select: {
              // Используем select, чтобы ограничить возвращаемые поля
              profile: {
                // Включаем только профиль
                select: {
                  name: true, // Выбираем только поле name из модели Profile
                },
              },
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

const updateModelsOfPost = async (user, snapshot) => {
  try {
    const postObj = {
      models: snapshot.models,
    };
    const updatedPost = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        posts: {
          update: [
            {
              where: { id: snapshot.postid }, // Укажите ID поста для обновления
              data: postObj,
            },
          ],
        },
      },
    });
    return updatedPost;
  } catch (error) {
    console.log(error);
  }
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

const removeAll = async () => {
  await prisma.user.deleteMany({});
};

const findUserByRefreshToken = async (token) => {
  const user = await prisma.user.findFirst({
    where: { refreshToken: token },
  });
  return user;
};

const findUserByEmail = async (email) => {
  const user = await prisma.user.findFirst({
    where: { email: email },
    include: {
      profile: true,
    },
  });
  return user;
};

const findUserByUsername = async (username) => {
  const user = await prisma.user.findFirst({
    where: { username: username },
    include: {
      profile: true,
    },
  });
  return user;
};

const updateProfile = async (user, profile) => {
  try {
    const { nickname: name, gender, age } = profile;

    const dataToUpdate = {};

    if (name) {
      dataToUpdate.name = name;
    }
    if (gender) {
      dataToUpdate.gender = gender;
    }
    if (age) {
      dataToUpdate.age = age;
    }

    if (Object.keys(dataToUpdate).length === 0) {
      console.log('Нет данных для обновления');
      return;
    }

    const updatedPost = await prisma.profile.update({
      where: {
        userId: user.id,
      },
      data: dataToUpdate,
    });
  } catch (error) {
    console.log(error);
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

const addComment = async (userId, comment) => {
  // Извлекаем текст и пост ID из объекта комментария
  const text = comment.text;
  const postId = parseInt(comment.post_id); // Убедитесь, что post_id является числом

  // Проверка на наличие обязательных данных
  if (!text || isNaN(postId)) {
    console.error('Ошибка: текст комментария и ID поста обязательны.');
    return;
  }

  try {
    // Создание нового комментария в базе данных
    const res = await prisma.comment.create({
      data: {
        text: text, // Текст комментария
        user: {
          connect: {
            id: userId, // Подключение к пользователю
          },
        },
        post: {
          connect: {
            id: postId, // Подключение к посту
          },
        },
      },
    });

    console.log('Комментарий добавлен:', res); // Вывод результата в консоль
    return res; // Вернем добавленный комментарий
  } catch (error) {
    console.error('Ошибка при добавлении комментария:', error); // Обработка ошибок
    throw error; // Опционально: пробрасываем ошибку дальше
  }
};

const updateComment = async (userId, comment) => {
  // Извлекаем текст и пост ID из объекта комментария
  const text = comment.text;
  const postId = parseInt(comment.post_id); // Убедитесь, что post_id является числом
  const commeintId = parseInt(comment.id);
  // Проверка на наличие обязательных данных
  if (!text || isNaN(postId)) {
    console.error('Ошибка: текст комментария и ID поста обязательны.');
    return;
  }

  try {
    // Создание нового комментария в базе данных
    const res = await prisma.comment.update({
      where: {
        userId: userId,
        postId: postId,
        id: commeintId,
      },
      data: {
        text: text, // Текст комментария
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

    console.log('Комментарий обновлен:', res); // Вывод результата в консоль
    return res; // Вернем добавленный комментарий
  } catch (error) {
    console.error('Ошибка при обновлении комментария:', error); // Обработка ошибок
    throw error; // Опционально: пробрасываем ошибку дальше
  }
};

const logoutUser = async (userId) => {
  const res = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      isAuthenticated: false,
      refreshToken: null,
    },
  });
};

const signupUser = async (userId) => {
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      isAuthenticated: true,
    },
    include: {
      profile: true,
    },
  });

  return user;
};

export const prismaDB = {
  findUserByUsername,
  getAllUsers,
  getAllPosts,
  setNewUser,
  findUser,
  setToken,
  findProfile,
  getPaginationPostsOfUser,
  updateAvatar,
  addPost,
  dropUsers,
  updateModelsOfPost,
  updateModels,
  removeAll,
  deletePost,
  setVerify,
  findUserByRefreshToken,
  setVerifyCode,
  findUserByEmail,
  updateProfile,
  updateTag,
  addComment,
  getPaginationPosts,
  countPost,
  findPostToId,
  getPaginationComments,
  countComments,
  removeComment,
  updateComment,
  updatePublishStatus,
  countUserPost,
  updateAuthor,
  updateTitle,
  updatePost,
  logoutUser,
  signupUser,
};
