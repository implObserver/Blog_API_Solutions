import asyncHandler from "express-async-handler";

const set_cookie = asyncHandler(async (req, res, next) => {
    const user = res.locals.user;
    res.cookie('token', user.token);
    res.cookie('user_id', user.id);
    next();
})

export const cookieController = {
    set_cookie,
}