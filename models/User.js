import mongoose, { Mongoose } from "mongoose";


const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    image: {
        type: String
    }
})

const User = mongoose.model("User", UserSchema);

export default User;