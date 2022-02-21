const User = require("../models/User");

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // show

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      res.json(user);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // update

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id)
        return res.status(400).json({
          errors: ["ID não enviado"],
        });

      const user = await User.findByPk(id);

      if (!user)
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });

      const newData = await user.update(req.body);

      res.json(newData);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id)
        return res.status(400).json({
          errors: ["ID não enviado"],
        });

      const user = await User.findByPk(id);

      if (!user)
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });

      await user.destroy();

      res.json(null);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

module.exports = new UserController();
