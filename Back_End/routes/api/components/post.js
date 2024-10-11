import { Router } from 'express';

import { userController } from '../../../controllers/user/index.js';
import { postsController } from '../../../controllers/post/index.js';

export const postRouter = Router();

//postRouter.get('/user/:userid/posts', userController.user_auth_jwt_protected, postsController);
postRouter.get(
  '/posts',
  userController.user_auth_jwt_protected,
  postsController.pagination_posts_list_get
);

postRouter.get(
  '/posts/:postid',
  userController.user_auth_jwt_protected,
  postsController.posts_to_id_get
);

postRouter.post(
  '/user/:userid/posts/add',
  userController.user_auth_jwt_protected,
  postsController.user_post_add_post,
  userController.user_get
);

postRouter.put(
  '/user/:userid/posts/:post_id/update_tag',
  userController.user_auth_jwt_protected,
  postsController.post_update_tag_put,
  userController.user_get
);

postRouter.put(
  '/user/:userid/posts/update',
  userController.user_auth_jwt_protected,
  postsController.user_post_update_put,
  userController.user_get
);

postRouter.get(
  '/user/:userid/posts/image/:imageid',
  userController.user_auth_jwt_protected,
  postsController.image_of_post_get
);

postRouter.post(
  '/user/:userid/posts/image/:nameFolder/update',
  userController.user_auth_jwt_protected,
  postsController.upload_image_of_post.single('file'),
  postsController.image_update_post
);

postRouter.delete(
  '/user/:userid/posts/image/:nameFolder/delete',
  userController.user_auth_jwt_protected,
  postsController.image_of_post_delete
);

postRouter.delete(
  '/user/:userid/posts/:postid/delete',
  userController.user_auth_jwt_protected,
  postsController.post_delete,
  userController.user_get
);
