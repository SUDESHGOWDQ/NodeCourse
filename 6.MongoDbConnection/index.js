const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
const port = 5000

dotenv.config()



mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB connected"))
.catch(err=>console.log(err))


app.get('/',(req,res)=>{
    res.send("Hello server is Connected")
})


app.listen(port,()=>{
    console.log("Server is Created");
});