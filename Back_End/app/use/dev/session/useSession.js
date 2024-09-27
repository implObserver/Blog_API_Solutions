import session from 'express-session';
import { app } from '../../../app.js';
import 'dotenv/config';

export const useSession = () => {
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
    })
  );
};
