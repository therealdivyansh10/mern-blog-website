import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const connection = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("Database connection was successfull !!!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDb;
