'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "water the plants",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "learn to code",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todoLists", null, {});
  }
};
