import asyncHandler from 'express-async-handler';

const redirect_main = asyncHandler(async (req, res) => {
  res.redirect('http://localhost:5000/');
});

const redirect_succesfull_email_verify = asyncHandler(async (req, res) => {
  res.redirect('http://localhost:5000/succesfullEmailVerify');
});

export const redirectMiddlewares = {
  redirect_main,
  redirect_succesfull_email_verify,
};
