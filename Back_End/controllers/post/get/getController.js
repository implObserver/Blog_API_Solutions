import asyncHandler from "express-async-handler";
import { prismaDB } from "../../../prisma/queries.js";
import { __dirname } from "../../../app/dirname/dirname.js";
import fs from 'fs'
import path from 'path'

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

const image_of_post_get = asyncHandler(async (req, res, next) => {
    console.log(req.params)
    const folderName = req.params.imageid;
    const folderPath = `${__dirname}/public/images/${req.user.id}/${folderName}`;
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.log(err)
            return res.json({ message: 'Папка не найдена' });
        }

        if (files.length === 0) {
            return res.json({ message: 'Папка пуста' });
        }
        const filePath = path.join(folderPath, files[0]); // Берем первый файл
        res.sendFile(filePath);
    });
});

export const getController = {
    posts_list_api,
    posts_of_user_get,
    image_of_post_get,
}