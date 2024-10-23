import asyncHandler from 'express-async-handler';

const set_cookie = asyncHandler(async (req, res, next) => {
  const user = res.locals.user;
  const refreshToken = res.locals.refreshToken;
  const acessToken = res.locals.acessToken;

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 3600000, // 1 час
  });

  res.cookie('acessToken', acessToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 3600000, // 1 час
  });

  res.cookie('user_id', user.id, {
    maxAge: 3600000, // 1 час
  });

  // Логируем куки
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
