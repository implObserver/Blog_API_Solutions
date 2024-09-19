import { getController } from "./get/getController.js"
import { putController } from "./put/putController.js";

export const profilesController = Object.assign(getController, putController);