import mongoose from "mongoose";

export const connectDb = async (): Promise<void> => {
    try {
        // mongoose.connect(process.env.MONGO_URI!) // The ! is a TypeScript non-null assertion operator that tells TypeScript this value won't be null/undefined
        mongoose.connect(process.env.MONGO_URI!) // The ! is a TypeScript non-null assertion operator that tells TypeScript this value won't be null/undefined
       const connection = mongoose.connection;

       connection.on("connected", () => {
        console.log("connected to db");
       })        

       connection.on("error", (error) => {
        console.log("something went wrong during connection indb ", error);
        process.exit(1);
       })
       
    } catch (error) {
        console.log("something went wrong during connection indb ", error);
    }
}