import 'dotenv/config';

export const defaultConfig = {
  port: process.env.PORT || '3000',
  host: process.env.HOST || '0.0.0.0',
};
