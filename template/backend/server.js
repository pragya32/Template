const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routers");
const cors = require("cors");
require("dotenv").config();
mongoose.connect(process.env.DATABASE, () => console.log("connected"));
app.use(express.json());
app.use(cors());
app.use("/app", router);
app.listen(4000, () => console.log("listening"));
