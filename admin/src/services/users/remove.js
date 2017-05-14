const Users = require('./../../schemas/users');

module.exports = (req, res) => {
  Users
    .findByIdAndRemove(req.params.id)
    .then((user) => res.redirect('/users'))
    .catch((error) => res.send(`Error: ${error}`))
};