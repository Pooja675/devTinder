const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Namastedev:XBES8YCkWMcflbM9@namastenode.z5qh6.mongodb.net/devTinder"
  );
};

module.exports = connectDB;

