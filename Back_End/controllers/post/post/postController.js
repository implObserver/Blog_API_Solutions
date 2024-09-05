import asyncHandler from "express-async-handler";
import { prismaDB } from "../../../prisma/queries.js";

const user_post_add_post = asyncHandler(async (req, res, next) => {
    let user = req.user;
    const title = req.body.title;
    await prismaDB.addPost(user, title)
    user = await prismaDB.findUser(req.user.id);
    res.json({
        user: {
            id: user.id,
            name: user.name,
            profile: user.profile,
            posts: user.posts,
        }
    });
})

const user_post_update_posts = asyncHandler(async (req, res, next) => {
    let user = req.user;
    const post = req.body;
    console.log
    await prismaDB.updatePost(user, post);
    user = await prismaDB.findUser(req.user.id);
    res.json({
        user: {
            id: user.id,
            name: user.name,
            profile: user.profile,
            posts: user.posts,
        }
    });
})

const user_post_update_posts_models = asyncHandler(async (req, res, next) => {
    let user = req.user;
    const data = req.body;
    console.log(req.body)
    await prismaDB.updateModels(data);
    user = await prismaDB.findUser(req.user.id);
    res.json({
        user: {
            id: user.id,
            name: user.name,
            profile: user.profile,
            posts: user.posts,
        }
    });
})

const image_update_post = asyncHandler(async (req, res, next) => {
    res.json('done')
})

export const postController = {
    user_post_add_post,
    user_post_update_posts,
    user_post_update_posts_models,
    image_update_post,
}