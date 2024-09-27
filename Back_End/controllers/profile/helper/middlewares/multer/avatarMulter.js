import multer from 'multer';
import fs from 'fs';
import path from 'path';

const createDirectory = async (directory) => {
  await fs.promises.mkdir(directory, { recursive: true });
};

const clearDirectory = async (directory) => {
  const files = await fs.promises.readdir(directory);
  await Promise.all(
    files.map((file) => fs.promises.unlink(path.join(directory, file)))
  );
};

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const userId = req.user.id;
    const directory = `public/images/${userId}/avatar/`;

    try {
      await createDirectory(directory);
      await clearDirectory(directory);
      cb(null, directory);
    } catch (error) {
      cb(error);
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const upload_avatar = multer({ storage });

export const multerController = {
  upload_avatar,
};
