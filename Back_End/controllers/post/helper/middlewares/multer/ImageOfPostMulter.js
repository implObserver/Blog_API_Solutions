import multer from 'multer';
import path from 'path';
import { compressImage } from '../compress/imageCompress.js';
import {
  deleteAllFilesInFolder,
  uploadFileToBucket,
} from '../../../../../app/cloudStore/yandexStorage/yandexStorage.js';
import { getContentTypeByExtension } from '../../getters/getContentTypeByExtension.js';

const storage = multer.memoryStorage();

const upload_image_of_post = multer({ storage });

const allowedExtensions = [
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.bmp',
  '.tiff',
  '.svg',
  '.avif',
  '.webp',
  '.heic',
  '.heif',
  '.ico',
];

export const handleImageUpload = async (req, res) => {
  const file = req.file;
  const bucketName = 'blog-api-store';
  const folderName = req.body.folderName;
  const postid = req.body.postid;
  const folderPath = `images/${postid}/${folderName}`;
  const fileName = `images/${postid}/${folderName}/${file.originalname}`;
  const fileExtension = path.extname(file.originalname).toLowerCase();

  try {
    let fileBuffer = file.buffer;

    if (allowedExtensions.includes(fileExtension)) {
      console.log('Сжатие изображения');
      fileBuffer = await compressImage(file.buffer);
    } else {
      console.log('Загрузка файла без сжатия');
    }

    // Определяем Content-Type
    const contentType = getContentTypeByExtension(fileExtension);

    // Удаляем предыдущие файлы
    await deleteAllFilesInFolder(bucketName, folderPath);

    // Загружаем файл с Content-Type
    const fileUrl = await uploadFileToBucket(
      bucketName,
      fileName,
      fileBuffer,
      contentType
    );
    return res.status(200).json({
      message: 'Изображение успешно загружено',
      path: fileUrl,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Ошибка при загрузке изображения',
      error: error.message,
    });
  }
};

export const multerController = {
  upload_image_of_post,
  handleImageUpload,
};
