import { cookieMiddlewares } from "./middlewares/cookie/cookieController.js";
import { getController } from "./get/getController.js"
import { postController } from "./post/postController.js";
import { transporterMiddlewares } from "./middlewares/transporter/transporter.js";

export const userController = Object.assign(
    getController,
    postController,
    cookieMiddlewares,
    transporterMiddlewares,);