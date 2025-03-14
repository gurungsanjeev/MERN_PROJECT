const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const UserDataModel = require('./models/UserData')

const app = express()
app.use(express.json())
app.use(cors())

// mongoose.connect("mongodb://localhost:127.0.0.1:27017/userDetails")

mongoose.connect("mongodb://127.0.0.1:27017/userDetails", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));
  


app.post('/signup', (req,res)=>{
UserDataModel.create(req.body)
.then(userDetails => res.json(userDetails))
.catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("server is running")
})