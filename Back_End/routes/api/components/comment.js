import { Router } from "express";
import { commentController } from "../../../controllers/comment/index.js";

export const commentRouter = Router();


commentRouter.get('comment/:id', commentController.comment_detail_api);
commentRouter.get('post/:postid/comments', commentController.comments_of_post_list_api);
commentRouter.get('user/:userid/comments', commentController.comments_of_user_list_api);