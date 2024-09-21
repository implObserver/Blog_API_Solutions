import asyncHandler from "express-async-handler";
import { prismaDB } from "../../../prisma/queries.js";
import { __dirname } from "../../../app/dirname/dirname.js";

const user_profile_update_put = asyncHandler(async (req, res, next) => {
    let user = req.user;
    const profile = req.body;
    await prismaDB.updateProfile(user, profile);
    user = await prismaDB.findUser(user.id);
    res.locals.user = user;
    next();
})

const user_avatar_update_put = [
    asyncHandler(async (req, res, next) => {
        console.log(req.user)
        res.locals.user = user;
        next();
    })
]

export const putController = {
    user_profile_update_put,
    user_avatar_update_put,
}