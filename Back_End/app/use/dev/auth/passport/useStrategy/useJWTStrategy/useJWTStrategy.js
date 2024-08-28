import passport from "passport";
import { Strategy as JwtStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import fs from 'fs';
import { __pathToKeyFolder } from "./keypair/generateKeypair.js";
import path from "path";
import { prismaDB } from "../../../../../../../prisma/queries.js";

const pathToKey = path.join(__pathToKeyFolder, 'id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PRIV_KEY,
    algorithms: ['RS256']
}

//for postgresDB
const verifyCallbackPg = async (payload, done) => {
    try {
        const user = await prismaDB.findUser(payload.sub);
        if (!user) {
            console.log('uncorrect username')
            return done(null, false);
        };
        console.log('Welcome')
        return done(null, user);
    } catch (err) {
        console.log('catch')
        return done(err);
    };
}

const strategy = new JwtStrategy(options, verifyCallbackPg);

export const useJWTStrategy = () => {
    passport.use(strategy);
}