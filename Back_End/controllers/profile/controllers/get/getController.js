import asyncHandler from 'express-async-handler';
import path from 'path';
import { getFileFromBucket } from '../../../../app/cloudStore/yandexStorage/yandexStorage.js';
import { prismaDB } from '../../../../database/prisma/queries/queries.js';

const profile_detail_api = asyncHandler(async (req, res, next) => {
  const profile = prismaDB.findProfile(req.id);
  if (profile === null) {
    const err = new Error('Profile not found');
    err.status = 404;
    return next(err);
  }

  res.json({
    title: 'Profile Detail',
    profile,
  });
});

const profile_avatar_get = asyncHandler(async (req, res) => {
  const bucketName = 'blog-api-store';
  const defaultAvatarPath =
    'https://blog-api-store.storage.yandexcloud.net/user-avatars/default/default.svg'; // Путь к стандартному аватару

  try {
    // Проверка на наличие аватара пользователя
    const avatarUrl = req.user?.profile?.avatar; // Безопасное получение URL аватара
    console.log('Аватар URL:', avatarUrl);

    if (avatarUrl) {
      console.log(avatarUrl);
      try {
        // Попытка получить аватар из хранилища
        const fileBuffer = await getFileFromBucket(bucketName, avatarUrl); // Получаем файл по URL

        if (fileBuffer) {
          // Определяем тип контента на основе расширения файла
          const extname = path.extname(avatarUrl).toLowerCase(); // Получаем расширение файла
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

          // Устанавливаем заголовок Content-Type
          res.set('Content-Type', contentType);
          return res.send(fileBuffer); // Возвращаем файл из хранилища
        }
      } catch (error) {
        console.error(
          'Ошибка при получении аватара из хранилища:',
          error.message
        );
      }
    }

    // Если аватар не найден или произошла ошибка, возвращаем стандартный аватар
    const contentType = 'image/svg+xml';
    const fileBuffer = await getFileFromBucket(bucketName, defaultAvatarPath); // Получаем стандартный аватар
    res.set('Content-Type', contentType);
    return res.send(fileBuffer);
  } catch (error) {
    console.error('Ошибка при получении аватара:', error.message);
    return res.status(500).send('Ошибка сервера');
  }
});

export const getController = {
  profile_detail_api,
  profile_avatar_get,
};
