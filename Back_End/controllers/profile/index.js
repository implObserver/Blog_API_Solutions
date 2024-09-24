import { getController } from "./controllers/get/getController.js";
import { putController } from "./controllers/put/putController.js";
import { multerController } from "./helper/middlewares/multer/avatarMulter.js";

export const profilesController = {
    ...getController,
    ...putController,
    ...multerController,
};