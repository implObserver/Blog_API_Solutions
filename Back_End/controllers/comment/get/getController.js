import asyncHandler from "express-async-handler";
import { body, validationResult } from "express-validator";
import { Comment } from "../../../models/comment.js";

const comment_detail_api = asyncHandler(async (req, res, next) => {
    const comment = await Comment.findById(req.params.id).exec();
    if (comment === null) {
        const err = new Error("Comment not found");
        err.status = 404;
        return next(err);
    }

    res.json({
        title: "Comment Detail",
        comment: comment,
    });
})

const comments_of_post_list_api = asyncHandler(async (req, res, next) => {
    const allCommentsOfPost = await Comment.find({ post: req.params.postid }).sort({ date: 1 }).exec();
    res.json({
        title: "Post Comments List",
        post_comments_list: allCommentsOfPost,
    });
});

const comments_of_user_list_api = asyncHandler(async (req, res, next) => {
    const allCommentsOfUser = await Comment.find({ author: req.params.userid }).sort({ date: 1 }).exec();
    res.json({
        title: "User Comments List",
        user_comments_list: allCommentsOfUser,
    });
});

export const getController = {
    comments_of_post_list_api,
    comments_of_user_list_api,
    comment_detail_api,
}