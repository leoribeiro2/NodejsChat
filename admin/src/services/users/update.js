const Users = require('./../../schemas/users');

module.exports = (req, res) => {
  Users
    .findById(req.params.id)
    .then((user) => {
      user.password = req.body.password;

      user.setPassword(user.password, (err, updated, passErr) => {
          if( err || passErr ) {
            res.send(`Error: ${err}`)
          }
          user.save();

          user.email = req.body.email;
          user.name = req.body.name;

          user.save();
          return res.redirect('/users')
        })
      })
};