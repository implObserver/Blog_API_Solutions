import cors from 'cors';
import { app } from '../../../../app.js';

// Проверка на наличие переменных окружения

export const useCORS = () => {
  app.use((req, res, next) => {
    console.log('Request Origin:', req.headers.origin); // Логируем origin
    console.log('Request Headers:', req.headers); // Логируем заголовки запроса
    console.log(`CORS middleware triggered for origin: ${req.headers.origin}`);
    next();
  });
  app.use(
    cors({
      origin: [
        'http://localhost:3000',
        'https://blogapifronttwo.netlify.app',
        'https://blogapifront.netlify.app',
      ],
      credentials: true,
    })
  );
};
