const multer = require("multer");
const { extname, resolve } = require("path");

exports.config = {
  fileFilter: (req, file, cb) => {
    if (file.mimetype != "image/png" && file.mimetype != "image/jpeg") {
      return cb(new multer.MulterError("Arquivo precisa ser PNG ou JPG"));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, "..", "..", "uploads"));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}${extname(file.originalname)}`);
    },
  }),
};
