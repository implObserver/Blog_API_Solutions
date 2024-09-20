import { cookieMiddlewares } from "./middlewares/cookie/cookieController.js";
import { getController } from "./get/getController.js"
import { postController } from "./post/postController.js";
import { transporterMiddlewares } from "./middlewares/transporter/transporter.js";
import { redirectMiddlewares } from "./middlewares/redirect/redirect.js";

export const userController = {
    ...getController,
    ...postController,
    ...cookieMiddlewares,
    ...transporterMiddlewares,
    ...redirectMiddlewares,
};