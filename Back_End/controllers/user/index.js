import { cookieMiddlewares } from "./helper/middlewares/cookie/cookieController.js";
import { getController } from "./controllers/get/getController.js"
import { postController } from "./controllers/post/postController.js";
import { transporterMiddlewares } from "./helper/middlewares/transporter/transporter.js";
import { redirectMiddlewares } from "./helper/middlewares/redirect/redirect.js";

export const userController = {
    ...getController,
    ...postController,
    ...cookieMiddlewares,
    ...transporterMiddlewares,
    ...redirectMiddlewares,
};