const mongoose = require('mongoose')

const UserDataSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const UserDataModel = mongoose.model("userDetails", UserDataSchema) /// new userDetails named table has been created 

module.exports = UserDataModel