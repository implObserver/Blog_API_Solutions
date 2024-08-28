import passport from "passport";
import { __dirname } from "../../../app/dirname/dirname.js";
import asyncHandler from "express-async-handler";

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

export const getController = {
    failureProtected,
    user_logout_get,
    user_get,
    authProtected,
}