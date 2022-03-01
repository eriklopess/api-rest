require("dotenv").config();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

class TokenController {
  async store(req, res) {
    const { email = "", password = "" } = req.body;
    console.log(req.body);

    if (!email || !password) {
      return res.status(401).json({
        errors: ["Credencias inválidas"],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ["Usuário não existe"],
      });
    }

    if (!user.passwordIsValid(password)) {
      return res.status(401).json({
        errors: ["Senha incorreta"],
      });
    }
    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ token, user: { name: user.nome, id, email } });
  }
}

module.exports = new TokenController();
