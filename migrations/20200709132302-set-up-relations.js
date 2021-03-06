"use strict";
//WORKING WITH THIS FILE!!!!
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("todoLists", "userId", { //userId is the name of column added to todoLists
      type: Sequelize.INTEGER,
      references: {
        model: "users", //references to users model 
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("todoItems", "todoListId", {
      type: Sequelize.INTEGER,
      references: {
        model: "todoItems", //same name as table in query pie
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("todoLists", "userId");
    await queryInterface.removeColumn("todoItems", "todoListId");
  },

};
