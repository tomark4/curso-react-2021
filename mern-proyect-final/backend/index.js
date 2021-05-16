const express = require("express");
const { dbConnection } = require("./database/config");
require('dotenv').config();

const app = express();

dbConnection();

// public dir
app.use(express.static('public'));
app.use(express.json())

// Routes
app.use("/api/auth",require('./routes/auth'));

// server
app.listen(process.env.PORT, () => {
  console.log("Express online in port ",process.env.PORT);
});
