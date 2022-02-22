const express = require("express");
const alunoController = require("../controllers/AlunoController");
const { loginRequired } = require("../middlewares/loginRequired");
const route = new express.Router();

route.get("/", alunoController.index);
route.post("/", loginRequired, alunoController.store);
route.put("/:id", loginRequired, alunoController.update);
route.get("/:id", alunoController.show);
route.delete("/:id", loginRequired, alunoController.delete);

module.exports = route;
