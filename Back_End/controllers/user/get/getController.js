import passport from "passport";
import { __dirname } from "../../../app/dirname/dirname.js";
import { ExtractJwt } from 'passport-jwt';

const user_auth_jwt_protected = async (req, res, next) => {
    console.log(req.headers)
    passport.authenticate("jwt", {
        session: false,
        failureRedirect: '/failure',
    })(req, res, next)
}

const failureProtected = (req, res, next) => {
    res.status(401).json({ message: 'unauthorized' });
}

const user_logout_get = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
};

export const getController = {
    user_auth_jwt_protected,
    failureProtected,
    user_logout_get,
}