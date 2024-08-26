import { getController } from "./get/getController.js"
import { postController } from "./post/postController.js";

export const profilesController = Object.assign(getController, postController, {});