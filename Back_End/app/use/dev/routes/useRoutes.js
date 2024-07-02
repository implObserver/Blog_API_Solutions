import { userRouter } from '../../../../routes/user.js'
import { indexRouter } from '../../../../routes/index.js';
import { app } from '../../../app.js';
import { apiRouter } from '../../../../routes/api/api.js';

export const useRoutes = () => {
    app.use(indexRouter);
    app.use(userRouter);
    app.use(apiRouter);
}