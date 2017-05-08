const Users = require('./../../schemas/users');
module.exports = (req, res) => {
  req.body.slug = req.body.name.toLowerCase().replace(/ /g, '-');

  Users
    .create(req.body)
    .then((user) => res.redirect('/users'))
    .catch((error) => res.send(`Error ${error}`))
};