import cors from 'cors';
import { app } from '../../../../app.js';

// Проверка на наличие переменных окружения
const creatorUrl =
  process.env.CREATOR_URL || 'https://blogapifronttwo.netlify.app/'; // Значение по умолчанию
const blogUrl = process.env.BLOG_URL || 'https://blogapifront.netlify.app/'; // Значение по умолчанию

const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [creatorUrl, blogUrl];
    // Разрешаем запросы без origins (например, когда запрос исходит из Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, origin);
    } else {
      console.error(`CORS error: Origin ${origin} is not allowed.`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // access-control-allow-credentials: true
  optionsSuccessStatus: 200,
};

export const useCORS = () => {
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions)); // Обработка preflight-запросов
};
