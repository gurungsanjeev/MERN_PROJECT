const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const UserModel = require('./models/UserDetails')


const app = express()
/// transfering the data from front end to backend in the form of json
app.use(express.json())
app.use(cors());


/// connection with mongoose DB

mongoose.connect("mongodb://127.0.0.1:27017/LoginDetails")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));


// creating route for the registration page
app.post('/register', (req,res)=>{
UserModel.create(req.body)
.then(registration => res.json(registration))
.catch(err=>res.json(err))
})

// creating route for the login page
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await UserModel.findOne({ email: email });

        // If no user found
        if (!user) {
            return res.status(404).json({ message: "No record found!" });
        }

        // Check password
        if (user.password !== password) {
            return res.status(401).json({ message: "The password is incorrect" });
        }

        // Successful login
        res.status(200).json({ message: "Success" });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
});




app.listen(3001, ()=>{
    console.log("server is running")
})
