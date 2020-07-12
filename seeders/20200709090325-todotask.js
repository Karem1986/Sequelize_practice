'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "todotasks",
      [
        {
          task: "finish-backend",
          deadline: "tomorrow Friday",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          task: "clean kitchen and bathroom",
          deadline: "Sunday",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "shopping on Sunday",
          deadline: "Sunday",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todotasks", null, {});
  }
};

