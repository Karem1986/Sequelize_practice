const user = require("./models/user");

const User = require("./models").user; //the file name in model  
const TodoItem = require("./models").todoItem; //the name inside the model file should be the same 

//Tasks on querying :https://reader.codaisseur.com/courses/backend-bootcamp/01-databases/querying
//SOLUTIONS here: https://github.com/Codaisseur/course-content-exercises/blob/master/week-5/sequelize-day2-day3/queries.js

//Get all users:
async function getAllUsers() {
    const allusers = await User.findAll(); //User as the const above
    return allusers.map(user => user.get({ plain: true }))
}
// getAllUsers().then(users => console.log("All users", users))

//GEt all the todoItems
async function getAllITems() {
    const allItems = await TodoItem.findAll();
    return allItems.map(item => item.get({ plain: true }))
}
// getAllITems().then(items => console.log("these are my items", items))

//Searches for an user by primary key

async function getPrimaryUser(key) {
    const userKey = await User.findByPk(key);
    return userKey ? userKey.get({ plain: true }) : "Not found"
}
// getPrimaryUser(0).then(userbykey => console.log("This user is by key", userbykey))

//Create a new user 
async function createNewUser({ name, email, phone }) {
    const newUser = await User.create({
        name, email, phone
    })
    return newUser.get({ plain: true })
}

// createNewUser({ name: "Tewu", email: "fodi@hotmail.com", phone: 18967345 })
//     .then(newuser => console.log("New user", newuser))

//Searches for important todo items
async function importantTodoItems() {
    const importantitems = await TodoItem.findAll({ where: { important: true } }) //searches for important items and tests if they are true(returning all of the items)
    return importantitems.map(important => important.get({ plain: true }))
}

importantTodoItems().then(smth => console.log("Testing important items", smth))

//EXAMPLE CODE FROM REIN ABOUT THIS PART HERE: https://github.com/Reinoptland/sequelize-examples/commits/master