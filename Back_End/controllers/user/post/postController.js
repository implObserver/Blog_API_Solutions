import { body, validationResult } from "express-validator";
import asyncHandler from "express-async-handler";
import passport from "passport";
import bcrypt from 'bcryptjs';
import { getAcessToken, getRefreshToken } from "../../../app/use/dev/auth/token/JWT/issueJWT.js";
import { prismaDB } from "../../../prisma/queries.js";

const user_create_post = [
    // Validate and sanitize fields.
    body('email')
        .isEmail()
        .withMessage('Invalid email address.'),
    body("password")
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage("Password must be specified."),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);
        const hashPassword = await bcrypt.hash(req.body.password, 10);

        const userPg = {
            email: req.body.email,
            password: hashPassword,
        }
        if (!errors.isEmpty()) {
            console.log(errors.errors[0].msg)
            return res.status(400).send({ error: errors.errors[0].msg });
        } else {
            const id = await prismaDB.setNewUser(userPg);
            const refreshToken = getRefreshToken(id).token;
            console.log('ww')
            await prismaDB.setToken(id, refreshToken);
            const user = await prismaDB.findUser(id);
            res.locals.user = user;
            res.locals.refreshToken = refreshToken;
            const users = await prismaDB.getAllUsers();
            console.log(users)
            next();
        }
    }),
];

const user_auth_post = [
    body('email')
        .isEmail()
        .withMessage('Invalid email address.'),
    body("password")
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage("Password must be specified."),

    asyncHandler(async (req, res, next) => {
        console.log(req.body)
        const errors = validationResult(req);
        console.log(errors)
        if (!errors.isEmpty()) {
            console.log(errors)
            return res.status(400).send({ error: errors.errors[0].msg });
        } else {
            passport.authenticate("local", (err, user, info) => {
                if (err) {
                    return next(err); // если есть ошибка, передаем ее дальше
                }
                if (!user) {
                    return res.status(400).send({ error: info.message }); // неверный логин/пароль
                }
                
                req.login(user, (err) => {
                    if (err) {
                        return next(err);
                    }
                    return res.status(200).send({ message: "Authenticated successfully", user });
                });
            })(req, res, next);
        }
    }),
];

const user_logout_post = asyncHandler(async (req, res, next) => {
    res.clearCookie("acessToken");
    res.clearCookie("token");
    res.clearCookie("refreshToken");
    res.clearCookie("user_id");
    res.clearCookie('connect.sid', { path: '/' });
    res.json({ res: "logout" })
})


const user_auth_jwt_protected = async (req, res, next) => {
    try {
        passport.authenticate("jwt", {
            session: false,
            failureRedirect: '/failure',
        })(req, res, next)
    } catch (err) {
        console.log(err)
    }
}

const refresh_acessToken = asyncHandler(async (req, res, next) => {
    console.log('acess')
    const tokens = req.cookies;
    const refreshToken = tokens.refreshToken;

    if (!refreshToken) return res.sendStatus(401);

    const user = await prismaDB.findUserByRefreshToken(refreshToken);

    if (!user) return res.sendStatus(403);

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

export const postController = {
    user_create_post,
    user_auth_post,
    user_logout_post,
    user_auth_jwt_protected,
    refresh_acessToken,
    refresh_refreshToken,
}