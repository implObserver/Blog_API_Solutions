import asyncHandler from "express-async-handler";

const user_post_add_post = asyncHandler(async (req, res, next) => {
    console.log(req.body)
    res.json({
        user: {
            id: req.user.id,
            name: req.user.name,
            profile: req.user.profile,
            posts: req.user.posts,
        }
    });
})

export const postController = {
    user_post_add_post,
}