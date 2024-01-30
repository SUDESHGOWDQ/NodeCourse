// app.js
const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./Routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017')
.then(()=>console.log("DB Connected"))
.catch(err => console.log(err))

// Middleware
app.use(express.json());

// Routes
app.use('/', apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
