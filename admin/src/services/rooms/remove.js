const Rooms =  require('./../../schemas/rooms');

module.exports = (req,res) => {
  Rooms
    .findByIdAndRemove(req.params.id)
    .then((room) => res.redirect('/rooms'))
    .catch((error) => res.send(`Error: ${error}`))
};