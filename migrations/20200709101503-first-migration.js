"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "todoItems",
      "important",//a column inside TodoItems called 'important' a new attribute as explained on https://reader.codaisseur.com/courses/backend-bootcamp/01-databases/migrations 
      { type: Sequelize.BOOLEAN },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("todoItems", "important", {});
  },
};