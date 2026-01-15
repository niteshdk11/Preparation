import mongoose from "mongoose";

export default   async ()=>{

    try {
        const uri = process.env.MONGODB_URI ? `${process.env.MONGODB_URI}/${DB_NAME}` : 'mongodb://localhost:27017/demo24';
        const connectionInstance = await mongoose.connect(uri);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}