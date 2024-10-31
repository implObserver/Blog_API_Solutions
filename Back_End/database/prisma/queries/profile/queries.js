import { prisma } from '../../getClient.js';

const findProfile = async (id) => {
  const profile = await prisma.profile.findUnique({
    where: { userId: id },
  });
  return profile;
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

    await prisma.profile.update({
      where: {
        userId: user.id,
      },
      data: dataToUpdate,
    });
  } catch (error) {
    console.log(error);
  }
};

export const profileQueries = {
  findProfile,
  updateProfile,
};
