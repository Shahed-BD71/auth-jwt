const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
var cors = require("cors");
const app = express();
const path = require('path')

// connect database.
mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);

app.use(express.json());
app.use(cors());
app.use("/auth", require("./routes/user"));

// server build
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Hello from the server side!!", PORT));
