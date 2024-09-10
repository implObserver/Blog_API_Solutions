import { Router } from 'express';
import { userController } from '../../../controllers/user/index.js';
import { uploadImageOfPost } from '../../../controllers/post/post/multer/ImageOfPostMulter.js';
import { postsController } from '../../../controllers/post/index.js';

export const postRouter = Router();

//postRouter.get('/user/:userid/posts', userController.user_auth_jwt_protected, postsController);
postRouter.get('/posts', userController.user_auth_jwt_protected, postsController.posts_list_api);
postRouter.post('/user/:userid/posts/add', userController.user_auth_jwt_protected, postsController.user_post_add_post)
postRouter.put('/user/:userid/posts/update', userController.user_auth_jwt_protected, postsController.user_post_update_put)
postRouter.post('/user/:userid/posts/update/models', userController.user_auth_jwt_protected, postsController.user_post_update_posts_models)
postRouter.get('/user/:userid/posts/image/:imageid', userController.user_auth_jwt_protected, postsController.image_of_post_get)
postRouter.post('/user/:userid/posts/image/:nameFolder/update', userController.user_auth_jwt_protected, uploadImageOfPost.single('file'), postsController.image_update_post)
postRouter.delete('/user/:userid/posts/image/:nameFolder/delete', userController.user_auth_jwt_protected, postsController.image_of_post_delete)
postRouter.delete('/user/:userid/posts/:postid/delete', userController.user_auth_jwt_protected, postsController.post_delete)