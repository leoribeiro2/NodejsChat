const Rooms =  require('./../../schemas/rooms');

module.exports = (req,res) => {
  req.body.slug = req.body.name.toLowerCase().replace(/ /g, '-');
  req.body.enable = req.body.enable ? true : false;
  Rooms
    .create(req.body)
    .then((room) => res.redirect('/rooms'))
    .catch((error) => res.send(`Error: ${error}`))
};