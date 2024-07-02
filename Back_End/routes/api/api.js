import { Router } from 'express';
import { postRouter } from './components/post.js';
import { commentRouter } from './components/comment.js';

export const apiRouter = Router();

apiRouter.use(
    "/api",
    postRouter,
    commentRouter,
);