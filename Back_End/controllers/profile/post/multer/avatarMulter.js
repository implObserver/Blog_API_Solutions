import multer from 'multer';
import fs from 'fs'
import path from 'path'

const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
        const id = req.user.id;
        const directory = `public/images/${id}/avatar/`;
        fs.readdir(directory, (err, files) => {
            if (files) {
                files.forEach(async (file) => {
                    fs.promises.unlink(path.join(directory, file));
                });
            }
        })

        await fs.promises.mkdir(directory, { recursive: true });

        cb(null, directory);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
});

export const uploadAvatar = multer({ storage });