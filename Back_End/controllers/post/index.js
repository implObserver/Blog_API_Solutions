import { deleteController } from "./controllers/delete/deleteController.js";
import { getController } from "./controllers/get/getController.js";
import { postController } from "./controllers/post/postController.js";
import { putController } from "./controllers/put/putController.js";
import { multerController } from "./helper/middlewares/multer/ImageOfPostMulter.js";

export const postsController = {
    ...getController,
    ...postController,
    ...deleteController,
    ...putController,
    ...multerController,
};