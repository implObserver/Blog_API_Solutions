import asyncHandler from "express-async-handler";
import { prismaDB } from "../../../prisma/queries.js";

const posts_of_user_get = asyncHandler(async (req, res, next) => {
    const post = await prismaDB.findPosts(req.id);
    if (post === null) {
        const err = new Error("Post not found");
        err.status = 404;
        return next(err);
    }

    res.json({
        title: "Post Detail",
        post: post,
    });
})

const posts_list_api = asyncHandler(async (req, res, next) => {
    const allPostPg = await prismaDB.getAllPosts();
    res.json({
        title: "Post List",
        post_list_pg: allPostPg,
    });
});

export const getController = {
    posts_list_api,
    posts_of_user_get,
}