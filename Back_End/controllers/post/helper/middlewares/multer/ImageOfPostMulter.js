import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { compressImage } from '../compress/imageCompress.js';

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const nameFolder = req.params.nameFolder;
    const directory = `public/images/${nameFolder}/`;
    fs.readdir(directory, (err, files) => {
      if (files) {
        files.forEach(async (file) => {
          fs.promises.unlink(path.join(directory, file));
        });
      }
    });

    await fs.promises.mkdir(directory, { recursive: true });

    cb(null, directory);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload_image_of_post = multer({ storage });

const handleImageUpload = async (req, res) => {
  const filePath = req.file.path;
  const compressedPath = path.join(
    path.dirname(filePath),
    `compressed_${req.file.filename}`
  );

  try {
    // Сжатие изображения
    await compressImage(filePath, compressedPath);

    // Удаляем оригинал после сжатия
    await fs.promises.unlink(filePath);

    return res.status(200).json({
      message: 'Изображение успешно загружено и сжато',
      path: compressedPath,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Ошибка при сжатии изображения', error: error.message });
  }
};

export const multerController = {
  upload_image_of_post,
  handleImageUpload,
};
