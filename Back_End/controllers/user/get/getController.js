import passport from "passport";
import { __dirname } from "../../../app/dirname/dirname.js";
import asyncHandler from "express-async-handler";
import { prismaDB } from "../../../prisma/queries.js";

const failureProtected = (req, res, next) => {
    res.status(401).json({ message: 'unauthorized' });
}

const authProtected = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.user = req.user;
        next()
    } else {
        res.json({ err: 'error' })
    }
}

const user_logout_get = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
};

const user_get = asyncHandler(async (req, res, next) => {
    const user = res.locals.user;
    res.json({
        user: {
            id: user.id,
            name: user.name,
            profile: user.profile,
            posts: user.posts,
        }
    });
})

const confirm_email = asyncHandler(async (req, res, next) => {
    try {
        // Получаем информацию о пользователе из токена
        const userId = req.user.id; // Здесь id пользователя должен быть доступен через токен JWT
        const user = await prismaDB.findById(userId);

        // Проверка, существует ли пользователь
        if (!user) {
            return res.status(400).send('Пользователь не найден');
        }

        // Обновляем значение isVerified
        prismaDB.setVerify(userId);

        res.send('Электронная почта подтверждена!');
    } catch (error) {
        res.status(400).send('Что-то пошло не так. Пожалуйста, повторите позже.');
    }
});

export const getController = {
    failureProtected,
    user_logout_get,
    user_get,
    authProtected,
    confirm_email,
}