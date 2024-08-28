import { Post } from "../../../models/post/post.js";
import asyncHandler from "express-async-handler";
import { prismaDB } from "../../../prisma/queries.js";
import { __dirname } from "../../../app/dirname/dirname.js";

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

const profile_avatar_get = asyncHandler(async (req, res, next) => {
    res.sendFile(`${__dirname}/${req.user.profile.avatar}`);
})

export const getController = {
    profile_detail_api,
    profile_avatar_get,
}