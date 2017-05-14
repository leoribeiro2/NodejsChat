module.exports = (req, res, next) => {
  req
    .checkBody('name', 'Fild name is required')
    .notEmpty();
  req
    .checkBody('description', 'Field description is required')
    .notEmpty();
  req
    .checkBody('enable', 'Field enable is required')
    .notEmpty();

  let erros = req.validationErrors();

  if(!erros) return next();
  console.log(erros);

  return res.redirect('/rooms');
};