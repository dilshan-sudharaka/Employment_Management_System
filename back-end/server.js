const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

require("dotenv").config(); // Loads environment variables from a .env file into process.env

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL; // MongoDB URL

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection; // MongoDB Connection
connection.once("open", () => {
  console.log("MongoDB Database Connection Successfull"); // Display in console if connection is successful
});

// add employee route
const employeeRouter = require("./routes/employeeRouter");
app.use("/employee", employeeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port number : ${PORT}`); // Dipaly in console if server is running
});
