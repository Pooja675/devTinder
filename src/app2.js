const express = require("express")

const app = express()

app.get("/user", [(req,res,next) => {
    console.log("Handling the route for user 1!!");
    next();
    //res.send("1st Response")
},

(req,res,next) => {
    console.log("Handling the route for user 2!!");
    //res.send("2nd Response")
    next();
},],

(req,res,next) => {
    console.log("Handling the route for user 3!!");
    //res.send("3rd Response")
    next();
},

(req,res,next) => {
    console.log("Handling the route for user 4!!");
    //res.send("4th Response")
    next();
},
 
(req,res,next) => {
    console.log("Handling the route for user 5!!");
    res.send("5th Response")
   
}

)

app.listen("5555", () => {
    console.log("Server started successfully.")
})