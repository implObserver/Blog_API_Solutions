import { Router } from 'express';
import { userController } from '../../../controllers/user/index.js';
import { profilesController } from '../../../controllers/profile/index.js';
import { uploadImages } from '../../../controllers/image/post/multer/multer.js';
import { uploadAvatar } from '../../../controllers/profile/post/multer/avatarMulter.js';

export const profileRouter = Router();

profileRouter.post("/user/:id/profile/update", userController.user_auth_jwt_protected, profilesController.user_profile_update_post);
profileRouter.post("/user/:id/profile/update/avatar", userController.user_auth_jwt_protected, uploadAvatar.single('file'), profilesController.user_avatar_update_post);
profileRouter.get("/user/:id/profile/", userController.user_auth_jwt_protected, profilesController.profile_detail_api);
profileRouter.post("/user/:id/profile/avatar", userController.user_auth_jwt_protected, profilesController.profile_avatar_get);