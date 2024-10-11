import { getController } from './controllers/get/getController.js';
import { postController } from './controllers/post/postController.js';

export const commentsController = {
  ...postController,
  ...getController,
};
