const bcryptjs = require("bcryptjs");

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Luiz 1",
          email: "luiz@teste.com.br",
          password_hash: await bcryptjs.hash("123123", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Luiz 2",
          email: "luiz2@teste.com.br",
          password_hash: await bcryptjs.hash("123123", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Luiz 3",
          email: "luiz3@teste.com.br",
          password_hash: await bcryptjs.hash("123123", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down() {},
};
