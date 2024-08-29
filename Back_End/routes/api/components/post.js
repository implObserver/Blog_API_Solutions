import { Router } from 'express';
import { postsController } from '../../../controllers/post/index.js';
import { userController } from '../../../controllers/user/index.js';

export const postRouter = Router();

postRouter.get('/user/:userid/posts', postsController.posts_of_user_get);
postRouter.get('/posts', userController.user_auth_jwt_protected, postsController.posts_list_api);
postRouter.post('/user/:userid/posts/add', userController.user_auth_jwt_protected, postsController.user_post_add_post)