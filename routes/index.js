const express = require('express')
const getMessage = require('../controllers/home')
const { addMessage } = require('../controllers/newController')

const homeRoute = express.Router();


homeRoute.get('/', getMessage)
homeRoute.post('/new', addMessage)

module.exports = homeRoute;