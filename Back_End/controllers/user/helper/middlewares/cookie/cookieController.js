import asyncHandler from 'express-async-handler';

const set_cookie = asyncHandler(async (req, res, next) => {
  const user = res.locals.user;
  const refreshToken = res.locals.refreshToken;
  const acessToken = res.locals.acessToken;
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true, // только для HTTPS
    sameSite: 'Lax', // или 'Lax', в зависимости от вашего случая
  });
  res.cookie('acessToken', acessToken, {
    httpOnly: true,
    secure: true, // только для HTTPS
    sameSite: 'Lax', // или 'Lax', в зависимости от вашего случая
  });
  res.cookie('user_id', user.id);
  console.log('Cookies set:', {
    refreshToken: refreshToken,
    acessToken: acessToken,
    user_id: user.id,
  });
  next();
});

export const cookieMiddlewares = {
  set_cookie,
};
