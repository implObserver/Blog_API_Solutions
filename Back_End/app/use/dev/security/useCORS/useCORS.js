import cors from 'cors';
import express from 'express';

const app = express();

export const useCORS = () => {
  // Логируем информацию о запросе
  app.use((req, res, next) => {
    console.log('Request Origin:', req.headers.origin); // Логируем origin
    console.log('Request Headers:', req.headers); // Логируем заголовки запроса
    console.log(`CORS middleware triggered for origin: ${req.headers.origin}`);
    next();
  });

  // Настройка CORS с конфигурацией
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
      allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    })
  );

  // Явное добавление CORS заголовков ко всем ответам
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    next();
  });

  // Обработка preflight-запросов типа OPTIONS
  app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.sendStatus(200);
  });
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
