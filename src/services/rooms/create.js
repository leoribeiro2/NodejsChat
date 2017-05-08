const Rooms =  require('./../../schemas/rooms');

module.exports = (req,res) => {
  Rooms
    .crete(req.body)
    .then((room) => res.redirect('/rooms'))
    .catch((error) => res.send(`Error: ${error}`))
}