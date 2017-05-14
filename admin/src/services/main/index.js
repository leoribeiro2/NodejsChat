module.exports = (req,res) => {
  return res.render('main/index', {
    title: "Node.js CHAT",
    user_logged: req.user
  })
};