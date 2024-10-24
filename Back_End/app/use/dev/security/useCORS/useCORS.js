import cors from 'cors';
import express from 'express';

const app = express();

export const useCORS = () => {
  // Логирование информации о запросе
  app.use((req, res, next) => {
    console.log('Request Origin:', req.headers.origin); // Логируем origin
    console.log('Request Headers:', req.headers); // Логируем заголовки запроса
    console.log(`CORS middleware triggered for origin: ${req.headers.origin}`);
    next();
  });

  // Настройка CORS
  app.use(
    cors({
      origin: [
        'http://localhost:3000',
        'http://localhost:5000',
        'http://localhost:5001',
        'https://blogapifronttwo.netlify.app',
        'https://blogapifront.netlify.app',
      ],
      credentials: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      allowedHeaders:
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    })
  );

  // Явное добавление заголовков для всех ответов
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header(
      'Access-Control-Allow-Methods',
      'GET,HEAD,PUT,PATCH,POST,DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
  });

  // Обработка preflight-запросов типа OPTIONS
  app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header(
      'Access-Control-Allow-Methods',
      'GET,HEAD,PUT,PATCH,POST,DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.sendStatus(200);
  });

  // Ваши маршруты должны быть подключены после CORS middleware
};
/*
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
        'http://localhost:5000',
        'http://localhost:5001',
        'https://blogapifronttwo.netlify.app',
        'https://blogapifront.netlify.app',
      ],
      credentials: true,
    })
  );
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
  });
};
*/
