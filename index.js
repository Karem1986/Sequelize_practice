//Create an Express App exercise 
//1. Import the user model: 
const User = require("./models").user;
const PORT = process.env.PORT || 4000; //HEROLU'S own port 
//2.Create the express app:
const express = require('express')//<= import express
const app = express()
const PORTexpress = 4000;
//Import the todoList model for implementation of 'Create and update
//actions on todoLists
const TodoList = require("./models").TodoList

app.use(express.json());

//To Test your setup add the following route:
app.post("/echo", (req, res) => {
    res.json(req.body);
});

//To test this app:
//2/3/4 Make a POST request to users with an email and confirm that the data
//includes ID in the response:
app.post("/users", async (req, res) => {
    try {
        //must be already an user so the id must be in the response 
        const email = req.body.email;
        if (!email || email === " ") {
            res.status(400).send("must provide an email address"); //works well
        } else {
            const user = await User.create(req.body); //creates a new user
            res.json(user);
        }
    } catch (e) {
        console.log(e)
    }
});

//5. Add a route definition that will respond to GET requests
// to /users/:userId. Use the User.findByPk()method along with the userId route parameter. 
//Fetch the correct user from the database and return it as a JSON response.
app.get("/users/userId", async (req, res) => {
    try {
        const userId = await User.findByPk(req.userId)
        if (userId) {
            res.status(200).send("User found")
        } else {
            res.send(404).send("User not found") //logs an error if user id is not found
        }
    } catch (e) {
        next(e)
    }
})

//Updating an user:
app.put("/users/:userId", async (req, res, next) => {
    try {
        const userId = parseInt(req.params.userId);
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

//Implement the create and update actions on todoLists 
//Implement at GET endpoint for all todoLists:
// app.get("users/userId/lists", async (req, res, next) => {
//     try {
//         const userId = parseInt(req.params.userId) //params of id and parse to an integer to return it as a JSON
//         const user = await User.findByPk(userId, {
//             include: [TodoList]
//         })
//         if (user) {
//             res.send(user.TodoList)
//         } else {
//             res.status(404).send("User not found")
//         }
//     } catch (e) {
//         next(e)
//     }
// })

//Implement the POST and PUT handlers for the todoLists
//POST to create a new task, in this case list? 
// app.post("/users/todoLists", async (req, res, next) => {
//     try {
//         const userId = parseInt(req.params.userId)
//         const user = await User.findByPk(userId, {
//             include: [TodoList]
//         })
//         if (!user) {
//             res.send(404).send("User not found")
//         } else {
//             const newlist = await TodoList.create({ userId, ...body })
//             res.json(newlist) //allow to create a new list if user exists and return the response in json
//         }
//     } catch (e) {
//         next(e)
//     }
// })

//Implement all other routes:


//for cors requests:
const cors = require("cors");
app.use(cors());

//App listening set up: 
app.listen(
    PORT,
    () => console.log(`listening on port: ${PORTexpress}`)
)

