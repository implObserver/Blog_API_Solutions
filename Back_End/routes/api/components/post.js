import { Router } from 'express';
import { postsController } from '../../../controllers/post/index.js';

export const postRouter = Router();

postRouter.get('/posts/:id', postsController.post_detail_api);
postRouter.get('/posts', postsController.posts_list_api);