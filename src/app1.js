const express = require("express");

const app = express(); //Instance of express

app.get("/user/:userId/:username/:password", (req,res) => {
    console.log(req.params)
    res.send({firstName: "Pooja", lastName:"Kumari"})
})

// app.use("/user", (req,res) => {
//     res.send("HAHAHAHAHAHA")
// })

//This will only handle GET to/test
// app.get("/user", (req, res) => {
//   res.send({ firstName: "Pooja", lastName: "Kumari" });
// });

// app.post("/user", (req, res) => {
//   res.send("Data successfully saved in the database.");
// });

// app.delete("/user", (req, res) => {
//   res.send("Data deleted successfully.");
// });

//This will match all the HTTP method API calls to / test
// app.use("/test", (req, res) => {
//   res.send("Namaste node.js season-2 !!");
// });

app.listen("5555", () => {
  console.log("Server has started successfully....");
});
