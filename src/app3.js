const express = require("express")
const app = express()

// GET /users =>  middleware chain => request handler

app.use("/", (req, res, next) =>{

   // res.send("Handling /route")
   next()
})

app.get("/user", (req,res,next) => {
    console.log("Handling /user route")
    next()
},

(req,res,next) => {

    //res.send("Handling 1st route.")
    next()
},

(req,res,next) => {

    res.send("Handling 2nd route.")
}

)

app.listen("5555", () => {

    console.log("Server started successfully !!")
})

