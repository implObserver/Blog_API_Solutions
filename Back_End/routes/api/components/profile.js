import { Router } from 'express';
import { userController } from '../../../controllers/user/index.js';
import { profilesController } from '../../../controllers/profile/index.js';

export const profileRouter = Router();

profileRouter.put(
    "/user/:id/profile/update",
    userController.user_auth_jwt_protected,
    profilesController.user_profile_update_put,
    userController.user_get
);

profileRouter.put(
    "/user/:id/profile/update/avatar",
    userController.user_auth_jwt_protected,
    profilesController.upload_avatar.single('file'),
    profilesController.user_avatar_update_put,
    userController.user_get
);

profileRouter.get(
    "/user/:id/profile/",
    userController.user_auth_jwt_protected,
    profilesController.profile_detail_api
);

profileRouter.get(
    "/user/:id/profile/avatar",
    userController.user_auth_jwt_protected,
    profilesController.profile_avatar_get
);