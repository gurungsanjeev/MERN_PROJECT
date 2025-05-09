import mongoose from "mongoose";

const Connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mern-chart-app");
    console.log("connected with mongodb");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  }
};

export default Connect;
