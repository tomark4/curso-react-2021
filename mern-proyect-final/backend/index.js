const express = require("express");
const { dbConnection } = require("./database/config");
require('dotenv').config();
const cors = require("cors");

const app = express();

dbConnection();

// public dir
app.use(express.static('public'));
app.use(express.json())
app.use(cors());

// Routes
app.use("/api/auth",require('./routes/auth'));
app.use("/api/events",require('./routes/events'));

// server
app.listen(process.env.PORT, () => {
  console.log("Express online in port ",process.env.PORT);
});
