import sharp from 'sharp';
import fs from 'fs';

export const compressImage = async (
  imageBuffer,
  maxWidth = 1920,
  maxHeight = 1080
) => {
  try {
    const compressedBuffer = await sharp(imageBuffer)
      .resize({
        width: maxWidth,
        height: maxHeight,
        fit: 'inside', // Сохранение пропорций
      })
      .jpeg({ quality: 90 }) // Качество сжатия
      .toBuffer(); // Возвращаем Buffer

    console.log('Изображение успешно сжато');
    return compressedBuffer; // Возвращаем сжатый Buffer
  } catch (err) {
    throw new Error('Ошибка при сжатии изображения: ' + err.message);
  }
};
