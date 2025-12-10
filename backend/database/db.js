import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_DB_URL = process.env.MONGO_DB_URL;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_DB_URL);
    console.log("Database connected Successfully.");
  } catch (error) {
    console.log("Failed to connect Database.", error);
  }
};
