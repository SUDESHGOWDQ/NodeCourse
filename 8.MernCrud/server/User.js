const mongoose = require('mongoose');

const schema =  new mongoose.Schema({
    name:String,
    email:String,
    image:String,
})

const UserModel = mongoose.model('user', schema)

module.exports = UserModel