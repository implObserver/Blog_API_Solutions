import asyncHandler from "express-async-handler";
import nodemailer from 'nodemailer'
import crypto from 'crypto'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_TRANSPORTER,
        pass: process.env.PASSWORD_TRANSPORTER,
    },
});

const send_email = asyncHandler(async (req, res, next) => {
    const token = res.locals.token;
    const secretKey = crypto.randomBytes(16).toString('hex');
    const url = `http://${process.env.HOST}:3000/api/confirm-email?token=${token}&key=${secretKey}`;
    await transporter.sendMail({
        to: email,
        subject: 'Подтвердите свой адрес электронной почты',
        html: `Подтвердите свою почту, перейдя по этой <a href="${url}">ссылке</a>`,
    });

    res.status(200).send('Мы отправили сообщение на вашу почту. Пожалуйста подтвердите его, чтобы закончить регистрацию!');
})

export const transporterMiddlewares = {
    send_email,
}