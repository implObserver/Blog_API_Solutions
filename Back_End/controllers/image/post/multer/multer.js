import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log('wwww')
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
});

export const uploadImages = multer({ storage });