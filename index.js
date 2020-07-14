//Create an Express App exercise 
//1. Import the user model: 
const User = require("./models").user;
const PORT = process.env.PORT || 4000; //HEROKU'S own port 
//2.Create the express app:
const express = require('express')//<= import express
const app = express()
const PORTexpress = 4000;
//Import the todoList model for implementation of 'Create and update
//actions on todoLists
const TodoList = require("./models").todoList

app.use(express.json());

//To Test your setup add the following route:
app.post("/echo", (req, res) => {
    res.json(req.body);
});

//To test this app:
//2/3/4 Make a POST request to users with an email and confirm that the data
//includes ID in the response:
// app.post("/users", async (req, res) => {
//     try {
//         //must be already an user so the id must be in the response 
//         const email = req.body.email;
//         if (!email || email === " ") {
//             res.status(400).send("must provide an email address"); //works well
//         } else {
//             const user = await User.create(req.body); //creates a new user
//             res.json(user);
//         }
//     } catch (e) {
//         console.log(e)
//     }
// });

//5. Add a route definition that will respond to GET requests
// to /users/:userId. Use the User.findByPk()method along with the userId route parameter. 
//Fetch the correct user from the database and return it as a JSON response.
app.get("/users/:userId", async (req, res) => {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId);
    if (!user) {
        res.status(404).send("User not found");
    } else {
        res.send(user);
    }
});
//Implement the create and update actions on todoLists 
//Implement at GET endpoint for all todoLists: LINE 49 IN SOLUTIONS 
app.get("/users/:userId/lists", async (req, res, next) => {
    // console.log("hello") //if the route is correct we will sen this on the server (2nd terminal)
    try { //httpie: http :4000/users/2
        const userId = parseInt(req.params.userId)
        console.log('testing', userId) //params of id and parse to an integer to return it as a JSON
        const user = await User.findByPk(userId, {
            include: [TodoList] //name of variable
        })
        console.log('testing user', user)
        if (user) {
            res.send(user.todoLists) //name of key in the table but not always so CONSOLE LOG FIRST! 
            console.log('inside if statement', user.todoLists) //name of key in the table
        } else {
            res.status(404).send("User not found")
            console.log('inside else statement')
        }
    } catch (e) {
        next(e)
    }
})

//Updating an user: line 80 in solutions 
app.put("/users/:userId", async (req, res, next) => {
    try { //TYPE PUT with httpie : http PUT :4000/users/2 name="lola"
        const userId = parseInt(req.params.userId);
        // console.log('hello') <= testing if it works 
        const userToUpdate = await User.findByPk(userId);
        if (!userToUpdate) {
            res.status(404).send("User not found");
        } else {
            const updatedUser = await userToUpdate.update(req.body);
            res.json(updatedUser);
        }
    } catch (e) {
        next(e);
    }
});

//Implement the POST and PUT handlers for the todoLists from 3 and 4 tasks
//POST to create a new task, in the list of items 
// app.post("/users/:userId/lists", async (req, res, next) => {
//     console.log('testing post method line 92')
//     try {
//         const userId = parseInt(req.params.userId);
//         const user = await User.findByPk(userId);
//         if (!user) {
//             res.status(404).send("User not found");
//         } else {
//             const newList = await TodoList.create({ userId, ...req.body });
//             res.json(newList);
//         }
//     } catch (e) {
//         next(e);
//     }
// });

//Implement all other routes:
//2.Use the previous snippet to implement the "read a single list" end-point.
//3.Implement the route to create a list for a user on the /users/:userId/lists endpoint. 
//What HTTP method and URI should it respond to? Use the TodoList.create method, like we did for
// users. 
//Additionally, it would be nice to validate/confirm that a task created for a non-existent user results in a 404.
app.post("/users/:userId/lists", async (req, res, next) => {
    console.log('testing line 114 post method') //line 65 in Solutions 
    try {
        const userId = parseInt(req.params.userId);
        const user = await User.findByPk(userId);
        if (!user) {
            res.status(404).send("User not found"); //if user is non-existent returns a 404
        } else {
            const newList = await TodoList.create({ userId, ...req.body });
            res.json(newList);
        }
    } catch (e) {
        next(e);
    }
});
//Implement the rest of routes:
//DELETE an user's list:
app.delete("/users/:userId/lists/:listId", async (req, res, next) => {
    console.log('testing delete for an user list')
    try {
        const listId = parseInt(req.params.listId);
        const toDelete = await TodoList.findByPk(listId);
        if (!toDelete) {
            res.status(404).send("List not found");
        } else {
            const deleted = await toDelete.destroy();
            res.json(deleted);
        }
    } catch (e) {
        next(e);
    }
});

//DELETE ALL user's list: 
app.delete("/users/:userId/lists", async (req, res, next) => {
    console.log('testing delete for ALL') //it works 
    try {
        const userId = parseInt(req.params.userId);
        console.log('testing userId')
        const user = await User.findByPk(userId, { include: [TodoList] });
        console.log('testing user')
        if (!user) {
            res.status(404).send("User not found");
            console.log('testing inside if')
        } else {
            user.todoLists.forEach(async list => await list.destroy()); //todoLists as in queryPie name//Now all lists for user 2 have been deleted
            console.log('what is forEach')
            res.status(204).send();
        }
    } catch (e) {
        next(e);
    }
});

//for cors requests:
const cors = require("cors");
app.use(cors());

//App listening set up: 
app.listen(
    PORT,
    () => console.log(`listening on port: ${PORTexpress}`)
)

