import { Post } from "../../../models/post/post.js";
import asyncHandler from "express-async-handler";
import { prismaDB } from "../../../prisma/queries.js";

const profile_detail_api = asyncHandler(async (req, res, next) => {
    const profile = prismaDB.findProfile(req.id);
    if (profile === null) {
        const err = new Error("Profile not found");
        err.status = 404;
        return next(err);
    }

    res.json({
        title: "Profile Detail",
        profile,
    });
})

export const getController = {
    profile_detail_api
}