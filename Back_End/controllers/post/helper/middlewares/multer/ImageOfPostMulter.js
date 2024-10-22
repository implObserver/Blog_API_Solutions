import multer from 'multer';
import fs from 'fs';
import path from 'path';

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const nameFolder = req.params.nameFolder;
    const directory = `public/images/${nameFolder}/`;
    fs.readdir(directory, (err, files) => {
      if (files) {
        files.forEach(async (file) => {
          fs.promises.unlink(path.join(directory, file));
        });
      }
    });

    await fs.promises.mkdir(directory, { recursive: true });

    cb(null, directory);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload_image_of_post = multer({ storage });

export const multerController = {
  upload_image_of_post,
};
