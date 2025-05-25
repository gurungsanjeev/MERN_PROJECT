import express from 'express'
import cors from 'cors'
// import Connect from './db/connection.js';
// import AuthRouter from './Routes/auth.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import userRoute from './Routes/user.route.js'

/// middlewares
const app = express();
dotenv.config();
app.use(cors()); /// enable for all request
app.use(express.json());
app.use(cookieParser());


const PORT = process.env.PORT || 5001;
const URI = process.env.MONGODB_URI



try {
    mongoose.connect(URI);
    console.log("connected to database successfully")
} catch (error) {
    console.log("Error :", error)
}

app.use('/user', userRoute)

app.listen(process.env.PORT, ()=>{
    
    console.log(`"server is running! at port " ${PORT}"`)
})