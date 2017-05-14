const Rooms =  require('./../../schemas/rooms');

module.exports = (req,res) => {
  let room = new Rooms();

  res.render('rooms/create', {
    title: "Rooms - Node.js Char Admin",
    room,
    user_logged: req.user
  })
};