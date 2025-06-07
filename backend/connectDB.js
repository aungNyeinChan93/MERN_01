import mongoose from "mongoose";

const connectDB = async (url, cb) => {
    try {
        const db = await mongoose.connect(url);
        console.log("Connected to MongoDB successfully. Host: " + db.connection.host);
        cb();
    } catch (error) {
        console.error("Failed to connect to DB:", error);
        cb(error);
    }
}

export default connectDB;