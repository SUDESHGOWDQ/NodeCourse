const express = require('express');


const app = express()

app.get('/',(req,res)=>{
    res.send("Hello we created Express Server!!")
})


app.listen(3000,()=>{
    console.log("Server is Created");
})