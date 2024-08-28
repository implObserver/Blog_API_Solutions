import asyncHandler from "express-async-handler";
import { prismaDB } from "../../../prisma/queries.js";
import { json } from "express";
import { __dirname } from "../../../app/dirname/dirname.js";

const user_profile_update_post = asyncHandler(async (req, res, next) => {
    console.log(req.body)
    res.json({
        user: {
            id: req.user.id,
            name: req.user.name,
            profile: req.user.profile,
            posts: req.user.posts,
        }
    });
})

const user_avatar_update_post = [
    asyncHandler(async (req, res, next) => {
        console.log(req.user)
        
        res.json({
            user: {
                id: req.user.id,
                name: req.user.name,
                profile: req.user.profile,
                posts: req.user.posts,
            }
        });
    })
]

export const postController = {
    user_profile_update_post,
    user_avatar_update_post,
}