const messages = require('../models/data')


function getMessage(req, res) {
  // console.log(messages)
  res.render('home', { messages: messages })
}

module.exports = getMessage 