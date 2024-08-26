import asyncHandler from "express-async-handler";
import { prismaDB } from "../../../prisma/queries.js";
import { json } from "express";

const user_profile_update_post = asyncHandler(async (req, res, next) => {
    const buffer = req.body
    //console.log(req.body)

    //const blob = new Blob([buffer], { type: "application/octet-stream" })
    //console.log(blob)
    // res.type(blob.type)
    //blob.arrayBuffer().then((buf) => {
    //res.send(Buffer.from(buf))
    //})
})

const user_avatar_update_post = [
    asyncHandler(async (req, res, next) => {
        res.json({ res: 'res' })
    })
]

export const postController = {
    user_profile_update_post,
    user_avatar_update_post,
}