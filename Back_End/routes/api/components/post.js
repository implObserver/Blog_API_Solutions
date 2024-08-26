import { Router } from 'express';
import { postsController } from '../../../controllers/post/index.js';

export const postRouter = Router();

postRouter.get('/user/:userid/posts', postsController.posts_of_user_get);
postRouter.get('/posts', postsController.posts_list_api);