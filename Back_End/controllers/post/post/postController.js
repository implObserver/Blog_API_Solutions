import asyncHandler from "express-async-handler";
import { prismaDB } from "../../../prisma/queries.js";

const user_post_add_post = asyncHandler(async (req, res, next) => {
    let user = req.user;
    const title = req.body.title;
    await prismaDB.addPost(user, title)
    user = await prismaDB.findUser(req.user.id);
    res.locals.user = user;
    next();
})

const image_update_post = asyncHandler(async (req, res, next) => {
    res.json('done')
})

export const postController = {
    user_post_add_post,
    image_update_post,
}