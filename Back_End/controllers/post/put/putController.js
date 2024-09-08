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

const user_post_update_put = asyncHandler(async (req, res, next) => {
    console.log('wtfff')
    let user = req.user;
    const post = req.body;
    console.log(post)
    await prismaDB.updatePost(user, post);
    console.log('update')
    user = await prismaDB.findUser(req.user.id);
    console.log('find')
    console.log(user.posts)
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
    console.log(user.posts)
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

export const putController = {
    user_post_update_put,
}