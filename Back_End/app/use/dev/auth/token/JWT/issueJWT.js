import jwt from "jsonwebtoken";
import fs from 'fs';
import { __pathToKeyFolder } from "../../passport/useStrategy/useJWTStrategy/keypair/generateKeypair.js";
import path from "path";

const pathToPrivKey = path.join(__pathToKeyFolder, 'id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToPrivKey, 'utf8');

const pathToPubKey = path.join(__pathToKeyFolder, 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToPubKey, 'utf8');

//jwt.verify(signedJWT, PUB_KEY, { algorithms: ['RS256'] }, (err, payload) => {});

//for postgresDB
export const getAcessToken = (id) => {
    const _id = id;

    const acessExpiresIn = '30m';

    const acessPayload = {
        sub: _id,
        iat: Math.floor(Date.now() / 1000),
    }

    const acessToken = jwt.sign(acessPayload, PRIV_KEY, { expiresIn: acessExpiresIn, algorithm: 'RS256' });
    return {
        token: 'Bearer ' + acessToken,
    }
}

export const getRefreshToken = (id) => {
    const _id = id;

    const refreshExpiresIn = '2d';

    const refreshPayload = {
        sub: _id,
        iat: Math.floor(Date.now() / 1000),
    }
    const refreshToken = jwt.sign(refreshPayload, PRIV_KEY, { expiresIn: refreshExpiresIn, algorithm: 'RS256' });
    return {
        token: 'Bearer ' + refreshToken
    }
}

export const issueJWTPG = (id) => {
    const _id = id;

    const acessExpiresIn = '15m';

    const acessPayload = {
        sub: _id,
        iat: Math.floor(Date.now() / 1000),
    }

    const acessToken = jwt.sign(acessPayload, PRIV_KEY, { expiresIn: acessExpiresIn, algorithm: 'RS256' });

    const refreshExpiresIn = '1d';

    const refreshPayload = {
        sub: _id,
        iat: Math.floor(Date.now() / 1000),
    }

    const refreshToken = jwt.sign(refreshPayload, PRIV_KEY, { expiresIn: refreshExpiresIn, algorithm: 'RS256' });

    return {
        refreshToken: {
            token: 'Bearer ' + refreshToken,
            expires: refreshExpiresIn
        },
        acessToken: {
            token: 'Bearer ' + acessToken,
            expires: acessExpiresIn
        }
    }
}