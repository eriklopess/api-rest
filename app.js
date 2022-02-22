const dotenv = require("dotenv");
const express = require("express");
const { resolve } = require("path");
dotenv.config();

require("./src/database/index");

const homeRoutes = require("./src/routes/homeRoutes");
const userRoutes = require("./src/routes/userRoutes");
const tokenRoutes = require("./src/routes/tokenRoutes");
const alunoRoutes = require("./src/routes/alunoRoutes");
const imageRoutes = require("./src/routes/imageRoutes");

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, "uploads")));
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users", userRoutes);
    this.app.use("/tokens", tokenRoutes);
    this.app.use("/alunos", alunoRoutes);
    this.app.use("/image", imageRoutes);
  }
}

module.exports = new App().app;
