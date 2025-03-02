const express = require('express');
const { getNew } = require('../controllers/newController');

const newRoute = express.Router();

newRoute.get('/', getNew)


module.exports = newRoute;