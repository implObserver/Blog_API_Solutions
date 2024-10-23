import { static as staticFile } from 'express';
import { join } from 'path';
import { __dirname } from '../../../../dirname/dirname.js';
import { app } from '../../../../app.js';

export const useStaticFileServe = () => {
  app.use(
    staticFile(join(__dirname, 'public'), {
      setHeaders: (res, filePath) => {
        // Устанавливаем правильные MIME-типы для JavaScript и CSS файлов
        if (filePath.endsWith('.js')) {
          res.setHeader('Content-Type', 'application/javascript');
        } else if (filePath.endsWith('.css')) {
          res.setHeader('Content-Type', 'text/css');
        }
        // Здесь можно добавить другие MIME-типы при необходимости
      },
    })
  );
};
