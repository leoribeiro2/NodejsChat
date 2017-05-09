const Users = require('./../../schemas/users');

module.exports = (req, res) => {
  Users
    .find()
    .then((users) => res.render('users/index', {
      title: 'Users - Node Chat',
      users,
      user_logged: req.user
    }))
    .catch((error) => res.send(`Error ${error}`))
};