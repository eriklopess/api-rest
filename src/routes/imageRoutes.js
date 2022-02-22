const express = require("express");
const imageController = require("../controllers/ImageController");
const { loginRequired } = require("../middlewares/loginRequired");

const route = new express.Router();

route.post("/", loginRequired, imageController.store);

module.exports = route;
