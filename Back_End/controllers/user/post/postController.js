import { body, validationResult } from "express-validator";
import asyncHandler from "express-async-handler";
import passport from "passport";
import bcrypt from 'bcryptjs';
import { User } from "../../../models/user.js";
import { issueJWT, issueJWTPG } from "../../../app/use/dev/auth/token/JWT/issueJWT.js";
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
        console.log('1')
        //for postgresDB
        const userPg = {
            username: req.body.username,
            password: hashPassword,
        }

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            console.log('noooo')
            return;
        } else {
            const id = await prismaDB.setNewUser(userPg);
            console.log('2')
            //const id = db.setNewUser(userPg); //for postgresDB
            const jwtpg = issueJWTPG(id);
            console.log('3')
            await prismaDB.setToken(id, jwtpg.token);
            // Data from form is valid.
            //const jwt = issueJWT(user); //forMongoDB
            // Save author.
            await user.save().then(
                res.json({ accessToken: jwtpg.token })
            );
            // Redirect to new author record.
            //res.json({ token: jwtpg.token });
        }
    }),
];

const user_auth_post = asyncHandler(async (req, res, next) => {
    console.log(req.body)
    passport.authenticate("local", {
        successRedirect: "success",
        failureRedirect: "failure",
    })(req, res, next)
});

export const postController = {
    user_create_post,
    user_auth_post,
}