import passport from "passport";

export const setSerializeUser = () => {
  passport.serializeUser((user, done) => {
    console.log('wtf')
    done(null, user.id);
  });
}