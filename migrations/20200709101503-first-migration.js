"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "todoItems",
      "important", //a column inside TodoItems called 'important 
      { type: Sequelize.BOOLEAN },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("todoItems", "important", {});
  },
};