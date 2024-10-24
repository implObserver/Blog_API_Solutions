import asyncHandler from 'express-async-handler';

const set_cookie = asyncHandler(async (req, res, next) => {
  const user = res.locals.user;
  const refreshToken = res.locals.refreshToken;
  const acessToken = res.locals.acessToken;

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: '7d',
  });

  res.cookie('acessToken', acessToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: '30m',
  });

  res.cookie('user_id', user.id, {
    maxAge: 'Infinity',
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
