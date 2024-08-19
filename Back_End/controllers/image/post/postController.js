import asyncHandler from "express-async-handler";

const save_post_image = [
    // Validate and sanitize fields.

    // Process request after validation and sanitization.
    asyncHandler(async (req, res, next) => {
        // Extract the validation errors from a request.
        // const errors = validationResult(req);
        console.log('wdw')
        console.log(req.headers)
        console.log(req.key)
        res.json({ token: 'lol' });
    }),
];

export const imageController = {
    save_post_image,
}