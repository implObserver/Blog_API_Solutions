import { body, validationResult } from "express-validator";
import asyncHandler from "express-async-handler";
import passport from "passport";
import bcrypt from 'bcryptjs';
import { getAcessToken, getRefreshToken } from "../../../app/use/dev/auth/token/JWT/issueJWT.js";
import { prismaDB } from "../../../prisma/queries.js";

const user_create_post = [
    // Validate and sanitize fields.
    body('mail')
        .isEmail()
        .withMessage('Invalid email address.'),
    body("password")
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage("Password must be specified."),

    asyncHandler(async (req, res, next) => {
        console.log('ww')
        const errors = validationResult(req);
        const hashPassword = await bcrypt.hash(req.body.password, 10);

        const userPg = {
            username: req.body.username,
            password: hashPassword,
        }

        if (!errors.isEmpty()) {
            console.log(errors)
            return res.status(400).send({ error: errors.array() });
        } else {
            const id = await prismaDB.setNewUser(userPg);
            const refreshToken = getRefreshToken(id).token;
            const acessToken = getAcessToken(id).token;
            await prismaDB.setToken(id, refreshToken.token);
            const user = await prismaDB.findUser(id);
            res.locals.user = user;
            res.locals.refreshToken = refreshToken;
            res.locals.acessToken = acessToken;
            next();
        }
    }),
];

const user_auth_post = [
    body("username")
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage("Name must be specified."),
    body("password")
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage("Password must be specified."),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return;
        } else {
            await passport.authenticate("local", {})(req, res, next)
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
    const tokens = req.cookies;
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