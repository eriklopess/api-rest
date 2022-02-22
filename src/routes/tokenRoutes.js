const express = require("express");
const tokenController = require("../controllers/TokenController");
const route = new express.Router();

route.post("/", tokenController.store);

module.exports = route;
