import passport from "passport";
import { Strategy as JwtStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import fs from 'fs';
import { __pathToKeyFolder } from "./keypair/generateKeypair.js";
import path from "path";
import { prismaDB } from "../../../../../../../prisma/queries.js";

const pathToKey = path.join(__pathToKeyFolder, 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) token = req.cookies['acessToken'];
    console.log(req.cookies)
    const tokenValue = token.startsWith('Bearer ') ? token.slice(7) : token;
    return tokenValue;
};

const options = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: PUB_KEY,
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