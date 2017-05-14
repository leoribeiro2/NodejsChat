const Rooms =  require('./../../schemas/rooms');

module.exports = (req,res) => {
  Rooms
    .findOne({ slug: req.params.slug })
    .then((room) => {
      if(!room) return res.status(400).end();

      return res.render('rooms/edit', {
        title: 'Rooms = Node.js Chat Admin',
        room,
        user_logged: req.user
      })
    })
    .catch((error) => res.send(`Error: ${error}`))
};