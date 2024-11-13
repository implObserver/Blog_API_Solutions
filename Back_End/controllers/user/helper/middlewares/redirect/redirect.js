import asyncHandler from 'express-async-handler';

const redirect_main = asyncHandler(async (req, res) => {
  res.redirect(process.env.BLOG_URL);
});

const redirect_succesfull_email_verify = asyncHandler(async (req, res) => {
  res.redirect(`${process.env.CONSTRUCTOR_URL}/succesfullEmailVerify`);
});

export const redirectMiddlewares = {
  redirect_main,
  redirect_succesfull_email_verify,
};
