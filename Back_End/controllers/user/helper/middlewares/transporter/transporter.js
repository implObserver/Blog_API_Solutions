import asyncHandler from 'express-async-handler';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { prismaDB } from '../../../../../database/prisma/queries.js';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465, // Обычно используемые порты: 587 или 465 для защищенных соединений
  secure: true, // Установите в true, если используете порт 465
  auth: {
    user: process.env.YANDEX_USER, // ваш адрес на Яндекс Почте
    pass: process.env.YANDEX_PASSWORD, // пароль от почты
  },
});

const send_email = asyncHandler(async (req, res) => {
  const id = res.locals.user.id;
  const refreshToken = res.locals.refreshToken;
  const email = res.locals.user.email;
  const secretKey = crypto.randomBytes(16).toString('hex');
  prismaDB.setVerifyCode(id, secretKey);
  const url = `http://localhost:3000/api/confirm-email?refreshToken=${refreshToken}&key=${secretKey}`;

  try {
    await transporter.sendMail({
      from: process.env.YANDEX_USER,
      to: email,
      subject: 'Подтвердите свой адрес электронной почты',
      html: `Подтвердите свою почту, перейдя по этой ссылке <a href="${url}">ссылке</a>`,
    });
  } catch (error) {
    console.log(error);
  }
  res.status(403).send({
    error:
      'Ваш электронный адрес не подтвержден. Пожалуйста, проверьте свою почту.',
  });
});

export const transporterMiddlewares = {
  send_email,
};
