import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import { User } from "../../../../../../../models/user.js";
import { prismaDB } from "../../../../../../../prisma/queries.js";

//for mongoDB
const verifyCallback = async (username, password, done) => {
    try {
        console.log('try')

        const user = await User.findOne({ username: username });
        if (!user) {
            console.log('uncorrect username')
            return done(null, false, { message: "Incorrect username" });
        };

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            console.log('Incorrect password')
            return done(null, false, { message: "Incorrect password" });
        };

        console.log('Welcome')
        return done(null, user);
    } catch (err) {
        console.log('catch')
        return done(err);
    };
}

//for postgresDB
const verifyCallbackPg = async (username, password, done) => {
    try {
        console.log(username)
        const user = await prismaDB.findUserByName(username);
        console.log(`www ${user}`)
        if (!user) {
            console.log('uncorrect username')
            return done(null, false, { message: "Incorrect username" });
        };
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            console.log('Incorrect password')
            return done(null, false, { message: "Incorrect password" });
        };
        console.log('Welcome')
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
