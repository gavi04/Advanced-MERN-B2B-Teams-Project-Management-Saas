import mongoose from "mongoose";
import { config } from "./app.config";

const connectDatabase = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("Connected to Mongo database");
  } catch (error) {
    console.error("Error connecting to Mongo database:", error);
    throw error;
  }
};

export default connectDatabase;