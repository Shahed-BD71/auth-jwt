const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

// connect database.
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
},(err) => {
  if(err) throw err; 
  console.log('Connected to MongoDB!!!')
}) 

app.use(express.json());
app.use('/auth', require('./routes/user'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Hello from the server side!!", PORT));
