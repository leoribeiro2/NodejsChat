const Rooms =  require('./../../schemas/rooms');

module.exports = (req,res) => {
  Rooms
    .find()
    .then((rooms) => res.render('rooms/index', {
      title:'Rooms - Node.js Chat Admin',
      rooms,
      user_logged: req.user
    }))
    .catch((error) => res.send(`Error: ${error}`))
};