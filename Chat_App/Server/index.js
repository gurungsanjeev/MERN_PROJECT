import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;
const URI = process.env.MONGODB_URI;


try{
    mongoose.connect(URI)
    (console.log("connected to the Mongodb"));
}catch(err){
console.log("failed to connect mongodb")
}


app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
})