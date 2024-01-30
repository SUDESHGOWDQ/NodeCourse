const express = require('express')

const app = express()


app.use((req,res,next)=>{
    if (10<20) {
        next()
    }
})


app.get('/',(req,res)=>{
    res.send("Home Page")
})



app.get('/about',(req,res)=>{
    res.send("About Page")
})


app.listen(3000,()=>{
    console.log("Server is created");
})