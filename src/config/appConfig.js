require("dotenv").config();

const PORT = process.env.PORT;
const URL = process.env.URL;

exports.appConfig = {
  url: `${URL}:${PORT}`,
};
