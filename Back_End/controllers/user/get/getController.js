import passport from "passport";
import { __dirname } from "../../../app/dirname/dirname.js";

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
    failureProtected,
    user_logout_get,
}