import asyncHandler from 'express-async-handler';

const set_cookie = asyncHandler(async (req, res, next) => {
  const user = res.locals.user;
  const refreshToken = res.locals.refreshToken;
  const accessToken = res.locals.accessToken;

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 604800000,
  });

  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 1800000,
  });

  res.cookie('user_id', user.id, {
    maxAge: 604800000,
    secure: true,
    sameSite: 'None',
  });

  // Логируем куки
  console.log('Cookies set:', {
    refreshToken: refreshToken,
    accessToken: accessToken,
    user_id: user.id,
  });

  next();
});

export const cookieMiddlewares = {
  set_cookie,
};
