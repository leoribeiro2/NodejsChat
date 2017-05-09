const Users = require('./../../schemas/users');

module.exports = (req, res) => {
  Users
    .findById(req.params.id)
    .then((user) => {
      if(!user){
        return res.sendStatus(404)
      }

      return res.render('users/edit', {
        title: "Users - Node.js Chat Admin",
        user,
        user_logged: req.user
      })
    })
    .catch((error) => res.send(`Error: ${error}`))
};