'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "tags",
      [
        {
          title: "milou",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tags", null, {});
  }
};
