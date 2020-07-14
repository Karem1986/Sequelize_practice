'use strict';

const fs = require('fs'); //import the files service module of node
const path = require('path'); //we are going to do things with file locations
const Sequelize = require('sequelize'); //import sequelize
const basename = path.basename(__filename); //where are these files located
const env = process.env.NODE_ENV || 'development'; //what is our environment? is it production, developemnt or test?
const config = require(__dirname + '/../config/config.json')[env]; //get the configuration file and the object for it
const db = {}; //create a db object --> empty to start 

let sequelize;
//Connect to our db using the config object
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.url, config);
}
//What files are in the model folder? 
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
