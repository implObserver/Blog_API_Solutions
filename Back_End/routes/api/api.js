import { Router } from 'express';
import { postRouter } from './components/post.js';
import { commentRouter } from './components/comment.js';
import { userRouter } from './components/user.js';
import { profileRouter } from './components/profile.js';
export const apiRouter = Router();

apiRouter.use('/api', postRouter, commentRouter, userRouter, profileRouter);
