const mongoose = require('mongoose')

const UserDataSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const UserModel = mongoose.model("userDetails", UserDataSchema)

module.exports = UserModel