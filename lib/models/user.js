import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String },
    semester: { type: String },
    stream: { type: String },
    email: { type: String },
    password: { type: String }
});

const user = mongoose.models.User || mongoose.model("User", userSchema);

export default user;
