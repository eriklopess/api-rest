const express = require("express");
const userController = require("../controllers/UserController");
const route = new express.Router();

route.post("/", userController.store);
route.get("/", userController.index);
route.get("/:id", userController.show);
route.put("/:id", userController.update);
route.delete("/:id", userController.delete);

module.exports = route;
