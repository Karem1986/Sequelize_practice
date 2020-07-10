module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "itemTags",//=>Name of the model inside the file 
      [
        {
          todoItemId: 1,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("itemTags", null, {});
  }
};
