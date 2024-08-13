import { body, validationResult } from "express-validator";
import asyncHandler from "express-async-handler";
import passport from "passport";
import bcrypt from 'bcryptjs';
import { User } from "../../../models/user.js";
import { issueJWT, issueJWTPG } from "../../../app/use/dev/auth/token/JWT/issueJWT.js";
import { db } from "../../../database/postgresSQL/queries.js";
import { prismaDB } from "../../../prisma/queries.js";

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