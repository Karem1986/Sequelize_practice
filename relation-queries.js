
const { user, todoItem, todoList, tag } = require("./models"); //exact name of the model 

// //1. Get one user by id with his lists:

// const { user, todoList } = require("./models");

// async function getUserWithList(id) {
//     const specificUser = await user.findByPk(id, { include: [todoList] });
//     return specificUser.get({ plain: true });
// }
// //Solution line 22-27
// getUserWithList(1).then(user => console.log("user by id with lists", user));

//Get important TodoItems with the name of the list they belong to 
// async function importantTodoItems() {
//     const importantItems = await todoItem.findAll({
//         where: {
//             important: true,
//         },
//         include: { model: todoList, attributes: ["name"] },
//     });
//     return importantItems.map((item) => item.get({ plain: true }));
// }
// importantTodoItems().then((item) => console.log(item));

// 3. Get one user by id with his lists, 
//which also contains their belonging TodoItem's task attribute:
// async function oneUserById() {
//     const userLists = await userLists.findByPk(id, {
//         include: [
//             {
//                 model: todoList,
//                 attributes: ["name"],
//                 include: { model: todoItem, attributes: ["task"] },

//             }
//         ]
//     });
//     return userLists.get({ plain: true });

// }

// oneUserById(2).then(user => console.log("User with tasks", user))

async function tagFind() {
    const tagforall = await tag.findAll();
    return tagforall.map(user => user.get({ plain: true }));
}
tagFind().then(tag1 => console.log('test line 30', tag1))

async function findUsers() {
    const findUsers = await user.findByPk(2);
    return findUsers.get({ plain: true }); //is not an array users, so we are not mapping over them. 
}
findUsers().then(user => console.log("All our users", user));