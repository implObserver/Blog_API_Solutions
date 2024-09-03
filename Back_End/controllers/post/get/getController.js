import asyncHandler from "express-async-handler";
import { prismaDB } from "../../../prisma/queries.js";

const posts_of_user_get = asyncHandler(async (req, res, next) => {
    const posts = await prismaDB.findPosts(req.user.id);
    if (posts === null) {
        const err = new Error("Posts not found");
        err.status = 404;
        return next(err);
    }

    res.json({
        title: "Posts Detail",
        posts,
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