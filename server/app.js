require("dotenv").config();
const express = require("express");
const cors = require("cors");

const transactionRouter = require("./routes/transaction");

// Express instance
const app = express();
app.use(express.json());

// CORS
app.use(cors());

// Routes
app.use("/transaction", transactionRouter);

module.exports = app;
