require("dotenv").config();

const PORT = process.env.PORT || 8080;

exports.appConfig = {
  url: `http://localhost:${PORT}`,
};
