import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwd: { type: String, required: true },
});

export const UserModel = mongoose.model("user", userSchema);
