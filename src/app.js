const express = require("express")

const app = express(); //Instance of express

app.use("/hello", (req,res) => {
    res.send("Hello hello hello!!")
})

app.use("/test", (req,res) => {
    res.send("Namaste node.js season-2 !!")
})

app.use("/", (req,res) => {
    res.send("Hello from the Server !!")
})

app.listen("5555", () => {

    console.log("Server has started successfully....");
})