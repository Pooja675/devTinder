const express = require("express")
const app = express()

// app.use("/", (err,req,res,next ) => {

//     //Log your error
//     res.status(500).send("Something went wrong...")
// })

app.get("/getUserData", (req,res) => {

    // try{
        //Logic of DB call and get user data
        throw new Error("dfdfdfd")
        //res.send("User data sent")

//     } catch(err) {
//             res.status(500).send("Some Error contact support team ")
//     }
 }
)

app.use("/", (err,req,res,next ) => {

    //Log your error
    res.status(500).send("Something went wrong...")
})

app.listen("5555", () => {

    console.log("Server started successfully.")
})