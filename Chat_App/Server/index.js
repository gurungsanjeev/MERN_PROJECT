import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js"

const app = express();
dotenv.config();

app.use(express.json());

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
app.use("/user", userRoute)




app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})