import cors from 'cors';
import { app } from '../../../../app.js';

export const useCORS = () => {
  app.use((req, res, next) => {
    console.log('Request Origin:', req.headers.origin); // Логируем origin
    console.log('Request Headers:', req.headers); // Логируем заголовки запроса
    console.log(`CORS middleware triggered for origin: ${req.headers.origin}`);

    // Обработка предзапроса (OPTIONS)
    if (req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
      );
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
      );
      return res.sendStatus(204); // 204 No Content
    }

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
