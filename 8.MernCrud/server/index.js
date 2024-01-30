//index.js
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./User')

 
const app = express()
app.use(cors())
app.use(express.json())


 
 
mongoose.connect('mongodb://127.0.0.0:27017/')
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));






 


app.get('/', (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.post('/create',(req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.get('/get/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findById({'_id':id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})



app.put('/update/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({'_id':id},{name:req.body.name,email:req.body.email,})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})





app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({'_id':id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})





  
 




 
 
app.listen(3001, () => {
    console.log("Server is Running");
})

