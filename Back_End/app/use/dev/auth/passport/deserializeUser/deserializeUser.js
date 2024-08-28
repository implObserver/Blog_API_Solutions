import passport from "passport";
import { prismaDB } from "../../../../../../prisma/queries.js";

export const setDeserializeUser = () => {
    passport.deserializeUser(async (id, done) => {
        try {
            console.log('blya')
            //const user = await User.findById(id); //for mongoDB
            const user = await prismaDB.findUser(id);
            done(null, user);
        } catch (err) {
            done(err);
        };
    });
}