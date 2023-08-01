import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type : String, required: true },
    number: {type: String, required: true, unique: true},
    score: {type: String, required: true},
    lastPlayed: {type: Date, required: true}
})

export const UserModel = mongoose.model("users", UserSchema);