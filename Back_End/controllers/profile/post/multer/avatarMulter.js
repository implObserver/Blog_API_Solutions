import multer from 'multer';
import fs from 'fs'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const id = req.user.id;
        const path = `public/images/${id}/avatar/`
        fs.mkdirSync(path, { recursive: true })
        cb(null, path);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
});

export const uploadAvatar = multer({ storage });