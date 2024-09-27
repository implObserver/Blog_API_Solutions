const index_default_get = (req, res) => {
  res.render('index', { user: req.user });
};

export const indexController = {
  index_default_get,
};
