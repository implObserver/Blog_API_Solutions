import { getController } from "./get/getController.js"
import { postController } from "./post/postController.js";

export const postsController = Object.assign(getController, postController, {});