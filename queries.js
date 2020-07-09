const User = require("./models").user; //the file name in model  
const TodoItem = require("./models").todoItem; //the name inside the model file should be the same 

async function Users() {

    try {
        // Select all rows. Search for all users and logs them:
        const allUsers = await User.findAll(); //user is the name of const in line 1 
        // return allUsers.map(user => user.get({ plain: true }));
        //Searches for all TodoItems and logs them(use plain:true)
        const allTodoItem = await TodoItem.findAll();
        // return allTodoItem.map(user => user.get({ plain: true }));
        // // Searches for a user by primary key
        const userByPk = await User.findByPk(2);
        // console.log('testuserbypk', userByPk)
        // return userByPk.get({ plain: true }) //gets only what i am asking for 
        // return userByPk ? userByPk.get({ plain: true }) : "It does not exist" //log a message if user does NOT exist 

        // // Creates a new user
        const newUser = await User.create({
            name: "Milo",
            email: "milo@milo.com"
        });
        // // Searches for important TodoItems
        // const importantItems = await todoItems.findAll();

    } catch (error) {
        console.log(error);
    }

}

Users().then(user => console.log('test line 30', user));  //SOLUTIONS here: https://github.com/Codaisseur/course-content-exercises/blob/master/week-5/sequelize-day2-day3/queries.js
