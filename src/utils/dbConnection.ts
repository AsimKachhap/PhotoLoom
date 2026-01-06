import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: boolean;
};

const connection: ConnectionObject = {};

const connectDb = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("Already Connected to Database.");
    return;
  }

  try {
    const dbInstance = await mongoose.connect(process.env.MONGODB_URI || "");
    connection.isConnected = dbInstance.connections[0].readyState === 1;
    console.log("Successfully connected to MongoDB Database. ");
  } catch (error) {
    console.error("Error while connecting to MongoDb Database.", error);
    throw error;
  }
};

export default connectDb;
