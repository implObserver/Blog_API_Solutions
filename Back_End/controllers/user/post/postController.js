import { body, validationResult } from "express-validator";
import asyncHandler from "express-async-handler";
import passport from "passport";
import bcrypt from 'bcryptjs';
import { issueJWTPG } from "../../../app/use/dev/auth/token/JWT/issueJWT.js";
import { prismaDB } from "../../../prisma/queries.js";
import { profile } from "console";

const user_create_post = [
    // Validate and sanitize fields.
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
        const hashPassword = await bcrypt.hash(req.body.password, 10);

        const userPg = {
            username: req.body.username,
            password: hashPassword,
        }
        if (!errors.isEmpty()) {
            return;
        } else {
            const id = await prismaDB.setNewUser(userPg);
            const jwtpg = issueJWTPG(id);
            await prismaDB.setToken(id, jwtpg.token);
            const user = await prismaDB.findUser(id);
            res.cookie('token', req.user.token);
            res.cookie('user_id', req.user.id);
            res.json({
                user: {
                    id: user.id,
                    name: user.name,
                }
            })
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
            await passport.authenticate("local", {
                failureRedirect: 'failure',
            })(req, res, next)
        }
    }),
];

const user_token_post = asyncHandler(async (req, res, next) => {
    res.cookie('token', req.user.token);
    res.cookie('user_id', req.user.id);
    res.json({
        user: {
            id: req.user.id,
            name: req.user.name,
            profile: req.user.profile,
            posts: req.user.posts,
        }
    });
});

const user_logout_post = asyncHandler(async (req, res, next) => {
    res.clearCookie("token");
    res.clearCookie("user_id");
    res.json({ res: "logout" })
})


const user_auth_jwt_protected = async (req, res, next) => {
    console.log(req.headers)
    passport.authenticate("jwt", {
        session: false,
        failureRedirect: '/failure',
    })(req, res, next)
}

export const postController = {
    user_create_post,
    user_auth_post,
    user_token_post,
    user_logout_post,
    user_auth_jwt_protected
}