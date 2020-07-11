'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "finish-backend",
          deadline: "tomorrow Friday",
          todoListId: 1, //key name has to match with the one in the column on query pie 
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),

        },

        {
          task: "clean kitchen and bathroom",
          deadline: "Sunday",
          important: true,
          todoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          task: "visit grandma",
          deadline: "Sunday",
          todoListId: 2,
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todoItems", null, {});
  }
};
