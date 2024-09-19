import asyncHandler from "express-async-handler";
import { prismaDB } from "../../../prisma/queries.js";

const user_post_update_put = asyncHandler(async (req, res, next) => {
    const payloadSize = JSON.stringify(req.body).length; // в байтах
    const megabyteSize = payloadSize / (1024 * 1024); // в мегабайтах
    console.log(`${megabyteSize} mb SIZE`)
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

export const putController = {
    user_post_update_put,
}