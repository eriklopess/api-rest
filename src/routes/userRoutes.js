const express = require("express");
const userController = require("../controllers/UserController");
const { loginRequired } = require("../middlewares/loginRequired");
const route = new express.Router();

route.post("/", userController.store);
route.put("/", loginRequired, userController.update);
route.delete("/", loginRequired, userController.delete);

module.exports = route;
