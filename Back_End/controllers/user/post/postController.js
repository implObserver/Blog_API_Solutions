import { body, validationResult } from "express-validator";
import asyncHandler from "express-async-handler";
import passport from "passport";
import bcrypt from 'bcryptjs';
import { User } from "../../../models/user.js";
import { issueJWT, issueJWTPG } from "../../../app/use/dev/auth/token/JWT/issueJWT.js";
import { db } from "../../../database/postgresSQL/queries.js";
import { prismaDB } from "../../../prisma/queries.js";

const user_create_post = [
    // Validate and sanitize fields.
    body("username")
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage("Name must be specified."),
    body("password")
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage("Password must be specified."),

    // Process request after validation and sanitization.
    asyncHandler(async (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        // Create Author object with escaped and trimmed data

        //for mongoDB
        const user = new User({
            username: req.body.username,
            password: hashPassword,
        });

        //for postgresDB
        const userPg = {
            username: req.body.username,
            password: hashPassword,
        }

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render("sign-up-form", {
                user: user,
                errors: errors.array(),
            });
            return;
        } else {
            const id = prismaDB.setNewUser(userPg);
            //const id = db.setNewUser(userPg); //for postgresDB
            const jwtpg = issueJWTPG(id);
            // Data from form is valid.
            //const jwt = issueJWT(user); //forMongoDB
            // Save author.
            await user.save();
            // Redirect to new author record.
            res.json({ token: {}, tokenpg: jwtpg.token });
        }
    }),
];

const user_auth_post = asyncHandler(async (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/",
    })(req, res, next)
});

export const postController = {
    user_create_post,
    user_auth_post,
}