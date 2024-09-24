import asyncHandler from "express-async-handler";
import { prismaDB } from "../../../../prisma/queries.js";
import { body, validationResult } from "express-validator";
import { sanitizeInput, validateElements } from "../../helper/validation/postValidation.js";


const user_post_update_put = [
    body('id')
        .isInt()
        .withMessage('id должен быть целым числом'),

    body('title')
        .isString()
        .withMessage('title не может быть пустым')
        .custom(value => sanitizeInput(value)),

    body('userId')
        .isInt()
        .withMessage('userId должен быть целым числом'),

    body('isPublished')
        .isBoolean()
        .withMessage('isPublished должно быть булевым значением'),

    body('postingDate')
        .isISO8601()
        .withMessage('postingDate должен быть в формате ISO 8601'),

    body('elements')
        .optional()
        .isArray()
        .withMessage('elements должно быть массивом')
        .custom(validateElements),


    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.errors[0].msg)
            return res.status(400).send({ error: errors.errors[0].msg });
        }

        let user = req.user;
        const post = req.body;
        await prismaDB.updatePost(user, post);
        user = await prismaDB.findUser(req.user.id);
        res.locals.user = user;
        next();
    })
]

export const putController = {
    user_post_update_put,
}