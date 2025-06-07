import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters long"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        // match: [/\S+@\S+\.\S+/, "Email is invalid"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        // minlength: [6, "Password must be at least 6 characters long"]
    }
});


const User = model('User', userSchema, 'users');

export default User;