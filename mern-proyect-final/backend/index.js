const express = require("express");
require('dotenv').config();

const app = express();

// public dir
app.use(express.static('public'));
app.use(express.json())

// Routes
app.use("/api/auth",require('./routes/auth'));

// server
app.listen(process.env.PORT, () => {
  console.log("Express online in port ",process.env.PORT);
});
