import passport from "passport";

const user_create_get = (req, res, next) => {
    //res.render("sign-up-form");
};

const user_auth_get = (req, res, next) => {
    //res.render("log-in-form", { user: req.user });
};

const user_auth_jwt_protected = async (req, res, next) => {
    passport.authenticate("jwt", {
        session: false,
        successRedirect: '/success',
        failureRedirect: '/failure',
    })(req, res, next)
}

const sucessProtected = (req, res, next) => {
    res.status(200).json({ message: 'sucess' });
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
    user_auth_get,
    user_auth_jwt_protected,
    sucessProtected,
    failureProtected,
    user_create_get,
    user_logout_get,
}