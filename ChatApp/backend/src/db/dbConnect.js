import mongoose from 'mongoose';

const dbConnect = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log(`MongoDB connected successfully on ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MongoDB connection failed",error);
        
    }
}

export default dbConnect;