import asyncHandler from "express-async-handler";

const redirect_main = asyncHandler(async (req, res, next) => {
    res.redirect('http://localhost:5000/');
})

export const redirectMiddlewares = {
    redirect_main,
}