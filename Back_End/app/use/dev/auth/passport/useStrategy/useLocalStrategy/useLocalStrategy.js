import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import { prismaDB } from "../../../../../../../prisma/queries.js";

//for postgresDB
const verifyCallbackPg = async (username, password, done) => {
    try {
        const user = await prismaDB.findUserByName(username);
        if (!user) {
            console.log('Incorrect username')
            return done(null, false, { message: "Incorrect username" });
        };
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return done(null, false, { message: "Incorrect password" });
        };
    
        return done(null, user);
    } catch (err) {
        console.log('catch')
        console.log(err)
        return done(err);
    };
}

const strategy = new LocalStrategy(verifyCallbackPg);

export const useLocalStrategy = () => {
    passport.use(strategy);
}
