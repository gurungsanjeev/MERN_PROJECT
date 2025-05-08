import mongoose from "mongoose";

const Connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mern-chart");
    console.log("connected with mongodb");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  }
};

export default Connect;
