import express from 'express'
import dotenv from 'dotenv'
import userRoute from "./routes/user.route.js"
import mongoose, { mongo } from 'mongoose';
import cors from "cors"
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();

app.use(express.json());

app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 5002;

/// connecting with the database

const URI = process.env.MONGODB_URI

try {
    mongoose.connect(URI)
    console.log("Mongodb connected!");
}
catch (err) {
    console.log("error in connecting DB", err)
}


// --- Routes ---
app.use('/api/user', userRoute);





app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})