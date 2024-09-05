import asyncHandler from "express-async-handler";
import { prismaDB } from "../../../prisma/queries.js";
import { __dirname } from "../../../app/dirname/dirname.js";
import fs from 'fs'
import path from 'path'

const image_of_post_delete = asyncHandler(async (req, res, next) => {
    const namefolder = req.params.nameFolder;
    const folderPath = `${__dirname}/public/images/${req.user.id}/${namefolder}`;
    // Проверка существования папки перед удалением
    console.log(folderPath)
    if (!fs.existsSync(folderPath)) {
        return res.status(404).json({ message: 'Папка не найдена' });
    }

    // Удаление папки с использованием fs.rmSync
    try {
        fs.rmSync(folderPath, { recursive: true, force: true });
        console.log('Папка успешно удалена');
        res.status(200).json({ message: 'Папка удалена' });
    } catch (error) {
        console.error('Ошибка при удалении папки:', error);
        res.status(500).json({ message: 'Ошибка при удалении папки' });
    }
})

export const deleteController = {
    image_of_post_delete,
}