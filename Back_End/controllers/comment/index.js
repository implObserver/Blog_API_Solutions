import { deleteController } from './controllers/delete/deleteController.js';
import { getController } from './controllers/get/getController.js';
import { postController } from './controllers/post/postController.js';
import { putController } from './controllers/put/putController.js';

export const commentsController = {
  ...postController,
  ...getController,
  ...deleteController,
  ...putController,
};
