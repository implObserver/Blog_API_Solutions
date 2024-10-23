import session from 'express-session';
import RedisStore from 'connect-redis';
import Redis from 'ioredis';
import { app } from '../../../app.js';
import 'dotenv/config';

// Создаем экземпляр клиента Redis
const redisClient = new Redis({
  host: process.env.REDIS_HOST, // Имя хоста без протокола
  port: process.env.REDIS_PORT || 6379, // Порт, по умолчанию 6379
  password: process.env.REDIS_PASSWORD || null, // Если пароль требуется, иначе null
});

export const useSession = () => {
  app.use(
    session({
      store: new RedisStore({ client: redisClient }), // Используем new для инициализации RedisStore
      secret: process.env.SESSION_SECRET, // Убедитесь, что переменная окружения настроена
      resave: false,
      saveUninitialized: false, // Установите в false для предотвращения создания пустых сессий
      cookie: { secure: false }, // Убедитесь, что это false, если вы не используете HTTPS
    })
  );
};
