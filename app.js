const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const { resolve } = require("path");
const cors = require("cors");
dotenv.config();

require("./src/database/index");

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
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
    this.app.use(express.static(resolve(__dirname, "uploads")));
  }

  routes() {
    this.app.use("/users", userRoutes);
    this.app.use("/auth", tokenRoutes);
    this.app.use("/alunos", alunoRoutes);
    this.app.use("/image", imageRoutes);
  }
}

module.exports = new App().app;
