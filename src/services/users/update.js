const Users = require('./../../schemas/users');

module.exports = (req, res) => {
  Users
    .findByIdAndUpdate(req.params.id, req.body)
    .then((user) => res.redirect(('/users')))
    .catch((error) => res.send(`Error: ${error}`))
};