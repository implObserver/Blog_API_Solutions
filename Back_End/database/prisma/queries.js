import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getPaginationPosts = async (offset, limit) => {
  return prisma.post.findMany({
    skip: offset,
    take: limit,
    include: {
      comments: true,
    },
  });
};

const countPost = () => {
  return prisma.post.count();
};

const dropUsers = async () => {
  await prisma.user.findMany({});
  await prisma.comment.findMany({});
  await prisma.profile.findMany({});
  await prisma.post.findMany({});
  //await prisma.$queryRaw('DROP schema users CASCADE')
};

const updateTag = async (user_id, post_id, tag) => {
  await prisma.post.update({
    where: {
      id: post_id,
      userId: user_id,
    },
    data: {
      tag: tag,
    },
  });
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
        password: user.password,
        isAdmin: false,
      },
    });

    await prisma.profile.create({
      data: {
        user: {
          connect: newUser,
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

const findPosts = async (id) => {
  console.log(id);
  const posts = await prisma.post.findMany({
    where: { userId: id },
  });
  return posts;
};

const addPost = async (user, title) => {
  const date = Date.now();

  const defaultElements = [
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
        elements: defaultElements,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateModels = async (data) => {
  const id = data.id;
  const models = data.models;
  console.log('noooo');
  try {
    await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        elements: {
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
      elements: snapshot.models,
    };
    const updatedPost = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        posts: {
          update: [
            {
              where: { id: snapshot.post_id }, // Укажите ID поста для обновления
              data: postObj,
            },
          ],
        },
      },
    });
    console.log(updatedPost);
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
  console.log('wtf');
  console.log(token);
  const user = await prisma.user.findFirst({
    where: { refreshToken: token },
  });
  console.log(
    await prisma.user.findFirst({
      where: { refreshToken: token },
    })
  );
  return user;
};

const findUserByEmail = async (email) => {
  const user = await prisma.user.findFirst({
    where: { email: email },
    include: {
      profile: true,
      posts: true,
      comments: true,
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

    console.log(updatedPost);
  } catch (error) {
    console.log(error);
  }
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

export const prismaDB = {
  getAllUsers,
  getAllPosts,
  setNewUser,
  findUser,
  setToken,
  findProfile,
  findPosts,
  updateAvatar,
  addPost,
  dropUsers,
  updatePost: updateModelsOfPost,
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
};
