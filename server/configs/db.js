import mongoose from "mongoose";


const connectDB = async () =>{
    try {
        mongoose.connection.on('connected', ()=> console.log("Database Connected"))
        let uri = process.env.MONGODB_URI?.trim() || '';
        if (uri.endsWith('/')) {
            uri = uri.slice(0, -1);
        }
        if (!uri.endsWith('/quickblog')) {
            uri = `${uri}/quickblog`;
        }
        await mongoose.connect(uri);
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;