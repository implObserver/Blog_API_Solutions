import asyncHandler from "express-async-handler";
import { prismaDB } from "../../../prisma/queries.js";

const user_post_update_put = asyncHandler(async (req, res, next) => {
    let user = req.user;
    const post = req.body;
    await prismaDB.updatePost(user, post);
    user = await prismaDB.findUser(req.user.id);
    res.locals.user = user;
    next();
})

export const putController = {
    user_post_update_put,
}