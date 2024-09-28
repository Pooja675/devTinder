const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  //Creating a new instance of the user model
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User Added successfully.");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

//Get user by emailId
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const user = await User.findOne({ emailId: userEmail });
    if (user.length === 0) {
      res.send("User not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("Something went wrong.");
  }

  // try{

  //   const users = await User.find({emailId : userEmail})
  //   if(users.length === 0){

  //     res.status(400).send("User not found")
  //   } else {
  //     res.send(users)
  //   }

  // } catch (err) {

  //   res.status(400).send("Something went wrong.")
  // }
});

// Feed API - GET /feed - get all users from database

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Somethinfg went wrong.");
  }
});

// delete a user from the database
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  try {
    //const user = await User.findByIdAndDelete({_id: userId})

    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted successfully.");
  } catch (err) {
    res.status(400).send("Something went wrong.");
  }
});

// update a user from a database
app.patch("/update/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;
  //console.log(data)

  try {
    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );
    if(!isUpdateAllowed){
      throw new Error("Update not allowed")
    }
    if(data?.skills.length > 10){
      throw new Error("Skills can not be more than 10")
    }
    
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    console.log(user);

    res.send("User has been updated successfully.");
  } catch (err) {
    res.status(400).send("Something went wrong " + err.message);
  }
});
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
