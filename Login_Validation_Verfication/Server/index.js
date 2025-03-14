const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/UserData')

const app = express()
app.use(express.json)
app.use(cors())

mongoose.connect("mongodb://localhost:127.0.0.1:27017/userDetails")


app.post('/signup', (req,res)=>{
UserModel.create(req.body)
.then(employee => res.json(userDetails))
.catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("server is running")
})