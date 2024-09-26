const express = require("express")
const connectDB = require("./config/database")
const app = express()
const User = require("./models/user")

app.post("/signup", async (req,res) => {

        //Creating a new instance of the user model
        const user = new User({
          firstName:"Ashutosh",
          lastName:"Kumar",
          emailId:"ashutosh786@gmail.com",
          password:"*dfhd747*",
        })

        try{

          await user.save();
        res.send("User Added successfully.")
        } catch(err) {
          res.status(400).send("Error saving the user:" + err.message)
        }

        
})

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen("5555", () => {
        console.log("Server has started successfully....");
      });
      
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });


