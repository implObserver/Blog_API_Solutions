import sharp from 'sharp';
import fs from 'fs';

export const compressImage = (
  inputPath,
  outputPath,
  maxWidth = 1920,
  maxHeight = 1080
) => {
  return sharp(inputPath)
    .resize({
      width: maxWidth,
      height: maxHeight,
      fit: 'inside', // Сохранение пропорций
    })
    .jpeg({ quality: 90 }) // Качество сжатия
    .toFile(outputPath)
    .then(() => {
      console.log(`Изображение сохранено в ${outputPath}`);
      return fs.promises.readFile(outputPath); // Возвращаем Buffer
    })
    .catch((err) => {
      throw new Error('Ошибка при сжатии изображения: ' + err.message);
    });
};
