const express = require('express');
const app = express()

app.use(express.json()); //added middleware to parse the data passed through body, fix if you are getting undefined in req.body
app.use(express.urlencoded({extended: true}));
const usersServerData = [{name:"userone"}, {name:"userTwo"}, {name:"userthree"}, {name:"userfour"}];

app.get("/", (req, res) => {
    res.send("Welcome")
})

app.get("/api/users", (req, res) => {
    res.json({"users": usersServerData})
})

app.post("/api/users", (req, res) => {
usersServerData.push(req.body);
console.log(usersServerData, "result...........");
res.send({"users": usersServerData});
})

app.listen(5000, () => {console.log("Server starting on port 5000")})