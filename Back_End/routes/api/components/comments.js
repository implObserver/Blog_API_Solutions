import { Router } from 'express';
import { userController } from '../../../controllers/user/index.js';
import { commentsController } from '../../../controllers/comment/index.js';

export const commentsRouter = Router();

commentsRouter.post(
  '/user/:userid/post/:postid/comment/add',
  userController.user_auth_jwt_protected,
  commentsController.comment_of_user_post,
  userController.user_get
);
