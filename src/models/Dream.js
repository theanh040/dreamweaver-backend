import mongoose from "mongoose";

const JournalSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    emotions: {
      joy: { type: Number, default: 0 },
      fear: { type: Number, default: 0 },
      sadness: { type: Number, default: 0 },
      anger: { type: Number, default: 0 },
      surprise: { type: Number, default: 0 },
      calm: { type: Number, default: 0 },
    },
    tags: {
      type: [String],
      default: [],
    },
    symbols: {
      type: [String],
      default: [],
    },
    theme: {
      type: String,
    },
    analysis: {
      type: String,
    },
    userMood: {
      type: String,
    },
    recurring: {
      type: Boolean,
      default: false,
    },
    imagePrompt: {
      type: String,
    },
    videoPrompt: {
      type: String,
    },
    generatedImage: {
      type: String,
    },
    generatedVideo: {
      type: String,
    },
  },
  {
    timestamps: true, // => tự động thêm createdAt và updatedAt
  }
);

export default mongoose.model("Journal", JournalSchema);
// Mô hình dữ liệu cho nhật ký giấc mơ