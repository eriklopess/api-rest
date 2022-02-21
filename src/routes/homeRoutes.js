const express = require('express');
const homeController = require('../controllers/HomeController');
const route = new express.Router();

route.get('/', homeController.index);

module.exports = route;