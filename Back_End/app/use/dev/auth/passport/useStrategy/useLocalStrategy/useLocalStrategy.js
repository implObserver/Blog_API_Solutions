import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import { prismaDB } from '../../../../../../../database/prisma/queries.js';

//for postgresDB
const verifyCallbackPg = async (email, password, done) => {
  try {
    const user = await prismaDB.findUserByEmail(email);
    if (!user) {
      console.log('Incorrect email');
      return done(null, false, {
        message: 'Incorrect email',
        status: 401,
      });
    }

    if (!user.isVerified) {
      console.log('Почтовый ящик не подтвержден');
      return done(null, false, {
        message: 'Почтовый ящик не подтвержден',
        status: 403,
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return done(null, false, {
        message: 'Incorrect password',
        status: 401,
      });
    }

    return done(null, user);
  } catch (err) {
    console.log('catch');
    console.log(err);
    return done(err);
  }
};

const strategy = new LocalStrategy(
  { usernameField: 'email' },
  verifyCallbackPg
);

export const useLocalStrategy = () => {
  passport.use(strategy);
};
