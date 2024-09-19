import asyncHandler from "express-async-handler";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_TRANSPORTER,
        pass: process.env.PASSWORD_TRANSPORTER,
    },
});

export const cookieController = {
    transporter,
}