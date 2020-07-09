'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "karem",
          email: "karem.ortiz@outlook.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Spencer Ortiz",
          email: "spencer.ortiz@outlook.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
