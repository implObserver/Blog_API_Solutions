import { prisma } from '../../getClient.js';

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
        avatar:
          'https://blog-api-store.storage.yandexcloud.net/user-avatars/default/default.svg',
      },
    });

    return newUser.id;
  } catch (error) {
    console.log(error);
  }
};

const setToken = async (id, token) => {
  await prisma.user.update({
    where: { id: id },
    data: {
      refreshToken: token,
    },
  });
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

export const userQueries = {
  findUser,
  findUserByEmail,
  findUserByRefreshToken,
  findUserByUsername,
  setNewUser,
  setToken,
  setVerify,
  setVerifyCode,
  logoutUser,
  signupUser,
};
