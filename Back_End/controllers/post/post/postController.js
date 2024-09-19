import asyncHandler from "express-async-handler";
import { prismaDB } from "../../../prisma/queries.js";

const user_post_add_post = asyncHandler(async (req, res, next) => {
    let user = req.user;
    const title = req.body.title;
    console.log('create post')
    await prismaDB.addPost(user, title)
    console.log('add post')
    user = await prismaDB.findUser(req.user.id);
    console.log('find user')
    console.log(user.posts[0].elements)
    console.log(user)
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
    image_update_post,
}