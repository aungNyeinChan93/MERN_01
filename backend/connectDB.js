import mongoose from "mongoose";

const connectDB = async (url, cb) => {
    try {
        await mongoose.connect(url);
        console.log(`DB is running in ${url}`);
        cb();
    } catch (error) {
        console.error("Failed to connect to DB:", error);
        cb(error);
    }
}

export default connectDB;