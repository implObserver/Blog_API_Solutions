import { Router } from 'express';
import { postsController } from '../../../controllers/post/index.js';
import { userController } from '../../../controllers/user/index.js';
import { uploadImageOfPost } from '../../../controllers/post/post/multer/ImageOfPostMulter.js';

export const postRouter = Router();

postRouter.get('/user/:userid/posts', userController.user_auth_jwt_protected, postsController.posts_of_user_get);
postRouter.get('/posts', userController.user_auth_jwt_protected, postsController.posts_list_api);
postRouter.post('/user/:userid/posts/add', userController.user_auth_jwt_protected, postsController.user_post_add_post)
postRouter.post('/user/:userid/posts/update', userController.user_auth_jwt_protected, postsController.user_post_update_posts)
postRouter.post('/user/:userid/posts/update/models', userController.user_auth_jwt_protected, postsController.user_post_update_posts_models)
postRouter.get('/user/:userid/posts/image/:imageid', userController.user_auth_jwt_protected, postsController.image_of_post_get)
postRouter.post('/user/:userid/posts/image/:nameFolder/update', userController.user_auth_jwt_protected, uploadImageOfPost.single('file'), postsController.image_update_post)
postRouter.delete('/user/:userid/posts/image/:nameFolder/delete', userController.user_auth_jwt_protected, postsController.image_of_post_delete)