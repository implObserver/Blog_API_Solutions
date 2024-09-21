import passport from "passport";
import { __dirname } from "../../../app/dirname/dirname.js";
import asyncHandler from "express-async-handler";
import { prismaDB } from "../../../prisma/queries.js";
import { getAcessToken } from "../../../app/use/dev/auth/token/JWT/issueJWT.js";

const failureProtected = (req, res, next) => {
    res.status(401).json({ message: 'unauthorized' });
}

const authProtected = (req, res, next) => {
    console.log(req.isAuthenticated())
    if (req.isAuthenticated()) {
        res.locals.user = req.user;
        res.locals.refreshToken = req.user.refreshToken;
        res.locals.acessToken = getAcessToken(req.user.id).token;
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
    console.log(user)
    res.json({
        user: {
            id: user.id,
            email: user.email,
            profile: user.profile,
            posts: user.posts,
        }
    });
})

const confirm_email = asyncHandler(async (req, res, next) => {
    try {
        const refreshToken = req.query.refreshToken;
        const secretKey = req.query.verifyCode;
        const users = await prismaDB.getAllUsers();
        // Получаем информацию о пользователе из токена
        const user = await prismaDB.findUserByRefreshToken(refreshToken);
        // Проверка, существует ли пользователь
        if (!user) {
            return res.status(400).send('Пользователь не найден');
        } else if (user.secretKey !== secretKey) {
            return res.status(400).send('Неверная ссылка');
        }
        // Обновляем значение isVerified
        prismaDB.setVerify(user.id);
        next();
    } catch (error) {
        res.status(400).send('Что-то пошло не так. Пожалуйста, повторите позже.');
    }
});

const refresh_acessToken = asyncHandler(async (req, res, next) => {
    console.log('acess')
    const tokens = req.cookies;
    const refreshToken = tokens?.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({ error: 'Refresh token is required.' });
    }

    const user = await prismaDB.findUserByRefreshToken(refreshToken);

    if (!user) {
        return res.status(403).json({ error: 'Invalid refresh token.' });
    }

    const acessToken = getAcessToken(user.id).token;

    res.locals.user = user;
    res.locals.refreshToken = refreshToken;
    res.locals.acessToken = acessToken;
    next();
})

const refresh_refreshToken = asyncHandler(async (req, res, next) => {
    console.log('refresh')
    const tokens = req.query;
    let refreshToken = tokens.refreshToken;

    if (!refreshToken) return res.sendStatus(401);

    const user = await prismaDB.findUserByRefreshToken(refreshToken);

    if (!user) return res.sendStatus(403);

    refreshToken = getRefreshToken(user.id).token;
    const acessToken = getAcessToken(user.id).token;
    await prismaDB.setToken(user.id, refreshToken);
    res.locals.user = user;
    res.locals.refreshToken = refreshToken;
    res.locals.acessToken = acessToken;
    next();
})

export const getController = {
    failureProtected,
    user_logout_get,
    user_get,
    authProtected,
    confirm_email,
    refresh_acessToken,
    refresh_refreshToken,
}