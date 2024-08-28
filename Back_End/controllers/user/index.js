import { cookieController } from "./cookie/cookieController.js";
import { getController } from "./get/getController.js"
import { postController } from "./post/postController.js";

export const userController = Object.assign(
    getController,
    postController,
    cookieController, {});