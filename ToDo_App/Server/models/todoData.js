const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: String,
    des: String,
    isCompleted:Boolean
})

const todoModel = mongoose.model("Todolist", todoSchema);
module.exports= todoModel;