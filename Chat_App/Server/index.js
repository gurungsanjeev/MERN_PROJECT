import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js"
import cors from "cors"
import cookieParser from "cookie-parser";
import messageRoute from "./routes/message.route.js"




const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use(cors());

const PORT = process.env.PORT || 5001;
const URI = process.env.MONGODB_URI;


//connecting with the mongodb
try {
    mongoose.connect(URI);
    console.log("connected to the Mongodb");
} catch (err) {
    console.log("failed to connect mongodb")
}



/// creating the middelwares
app.use("/api/user", userRoute)
app.use("/api/message", messageRoute)




app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})