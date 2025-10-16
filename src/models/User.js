import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
{
  _id: ObjectId,
  email: String,
  password: String (hashed),
  name: String,
  createdAt: Date,
  apiKeys: {
    openai: String (encrypted),
    runway: String (encrypted)
  }
}
);