module.exports.init = app => {
  app.get('/user', (req, res) => {
    res.json({user: req.user})
  })
}
