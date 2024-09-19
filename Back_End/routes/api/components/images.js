import { Router } from "express";
import { imageController } from "../../../controllers/image/post/postController.js";
import { uploadImages } from "../../../controllers/image/post/multer/multer.js";

export const imageRouter = Router();

imageRouter.get('post/:postid/images', () => {

});
imageRouter.get('post/:postid/images/:imageid', () => {

});
//imageRouter.post('/images/:imageid', uploadImages.single('file'), imageController.save_post_image);