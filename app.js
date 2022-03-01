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

const whiteList = ["http://35.247.194.102", "http://localhost:3000"];

const corsOptions = {
  origin: (origin, callback) => {
    if(whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'), false)
    }
  }
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
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
    this.app.use("/tokens", tokenRoutes);
    this.app.use("/alunos", alunoRoutes);
    this.app.use("/image", imageRoutes);
  }
}

module.exports = new App().app;
