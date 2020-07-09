'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "todoItem2s",
      [
        {
          task: "shopping",
          deadline: "today evening",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          task: "shower",
          deadline: "before shopping",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todoItem2s", null, {});
  }
};