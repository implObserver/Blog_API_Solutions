import multer from 'multer';
import {
  deleteAllFilesInFolder,
  deleteFileFromBucket,
  uploadFileToBucket,
} from '../../../../../app/cloudStore/yandexStorage/yandexStorage.js';
import path from 'path';
import { compressImage } from '../../../../post/helper/middlewares/compress/imageCompress.js';

const storage = multer.memoryStorage(); // Используем память для временного хранения файлов

export const upload_avatar = multer({ storage });

export const handleAvatarUpload = async (req, res) => {
  const userId = req.user.id;
  const file = req.file;
  const bucketName = 'blog-api-store';
  const folderPath = `user-avatars/${userId}/`;

  // Список допустимых расширений
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif']; // Допустимые расширения для аватара

  // Извлечение расширения из оригинального имени файла
  const extension = path.extname(file.originalname).toLowerCase();
  const fileName = `${folderPath}avatar${extension}`;

  try {
    // Удаление всех файлов в папке
    await deleteAllFilesInFolder(bucketName, folderPath);

    let fileBuffer = file.buffer;

    // Проверка расширения файла
    if (allowedExtensions.includes(extension)) {
      console.log('Сжатие изображения аватара');
      // Сжатие аватара
      fileBuffer = await compressImage(file.buffer, 960, 540);
    } else {
      console.log(
        'Загружается аватар без сжатия, так как его расширение недопустимо'
      );
    }

    // Загрузка нового аватара
    const fileUrl = await uploadFileToBucket(bucketName, fileName, fileBuffer);

    console.log('Аватар успешно загружен');
    return fileUrl;
  } catch (error) {
    console.log('Ошибка загрузки файла:', error.message);
    return res
      .status(500)
      .json({ message: 'Ошибка при загрузке аватара', error: error.message });
  }
};

export const multerController = {
  upload_avatar,
};
