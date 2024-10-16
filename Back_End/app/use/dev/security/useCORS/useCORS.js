import cors from 'cors';
import { app } from '../../../../app.js';

const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [process.env.CREATOR_URL, process.env.BLOG_URL];
    console.log(origin);
    // Разрешаем запросы без origins (например, когда запрос исходит из Postman)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, origin);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

export const useCORS = () => {
  app.use(cors(corsOptions));
};
