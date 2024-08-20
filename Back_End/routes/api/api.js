import { Router } from 'express';
import { postRouter } from './components/post.js';
import { commentRouter } from './components/comment.js';
import { imageRouter } from './components/images.js';
import { userRouter } from './components/user.js';

export const apiRouter = Router();

apiRouter.use(
    "/api",
    postRouter,
    commentRouter,
    imageRouter,
    userRouter,
);