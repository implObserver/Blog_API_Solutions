import { Post } from "../../../models/post/post.js";
import asyncHandler from "express-async-handler";
import { prismaDB } from "../../../prisma/queries.js";

const post_detail_api = asyncHandler(async (req, res, next) => {
    const post = await Post.findById(req.params.id).exec();
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
    const allPosts = await Post.find({ published: true }).sort({ date: 1 }).exec();
    const allPostPg = prismaDB.getAllPosts();
    res.json({
        title: "Post List",
        post_list: allPosts,
        post_list_pg: allPostPg,
    });
});

export const getController = {
    posts_list_api,
    post_detail_api,
}