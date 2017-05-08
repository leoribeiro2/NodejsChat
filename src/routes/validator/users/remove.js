module.exports = (req, res, next) => {
  req
    .checkParams('id', 'Field id is required')
    .notEmpty()
    .isMongoId();

  let erros = req.validationErrors();

  if(!erros) return next();

  return res.redirect('/users');
};