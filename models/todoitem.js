'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todoItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      todoItem.associate = function (models) {
        todoItem.belongsTo(models.todoList);
        todoItem.belongsToMany(models.tag, {
          through: "ItemTags",
          foreignKey: "todoItemId"
        }) //the column will be in todo items, name: todoListId/the child is todo item
      };
    }
  };
  todoItem.init({
    task: DataTypes.STRING,
    deadline: DataTypes.STRING,
    important: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'todoItem',
  });
  return todoItem;
};