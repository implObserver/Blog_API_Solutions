import { Router } from 'express';
import { postRouter } from './components/post.js';
import { commentsRouter } from './components/comments.js';
import { userRouter } from './components/user.js';
import { profileRouter } from './components/profile.js';
export const apiRouter = Router();

apiRouter.use('/api', postRouter, commentsRouter, userRouter, profileRouter);
