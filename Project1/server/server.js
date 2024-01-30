const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UploadRoute = require("./routes/UploadRoute");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = 5000;

mongoose.connect('mongodb://127.0.0.1:27017')
.then(()=>console.log("DB connect"))

app.use(UploadRoute);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});