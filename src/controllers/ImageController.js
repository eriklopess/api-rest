const Image = require("../models/Image");
const multer = require("multer");
const { config } = require("../config/multer");

const upload = multer(config).single("image");

class ImageController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Image.create({ originalname, filename, aluno_id });
        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }
    });
  }
}

module.exports = new ImageController();
