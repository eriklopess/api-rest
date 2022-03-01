require("dotenv").config();

const PORT = process.env.PORT || 8080;
const URL = process.env.URL;

exports.appConfig = {
  url: `${URL}:${PORT}`,
};
