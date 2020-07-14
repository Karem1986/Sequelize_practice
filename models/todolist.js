'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todoList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      todoList.associate = function (models) {
        todoList.hasMany(models.todoItem);
        todoList.belongsTo(models.user); //todo list has a column with user id//every todolist belongs to an user
      };
    }
  };
  todoList.init({
    name: DataTypes.STRING, //It only has name as attribute so it has to match with the migration file too

  }, {
    sequelize,
    modelName: 'todoList',
  });
  return todoList;
};