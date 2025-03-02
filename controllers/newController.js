const messages = require('../models/data')

function addMessage(req, res) {
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  // res.render('new', { messages: messages })
  res.redirect('/');
}

function getNew(req, res) {
  res.render('form')
}

module.exports = { addMessage, getNew };