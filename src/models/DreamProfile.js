import mongoose from "mongoose";

const DreamProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalDreams: {
      type: Number,
      default: 0,
    },
    avgEmotions: {
      joy: { type: Number, default: 0 },
      fear: { type: Number, default: 0 },
      sadness: { type: Number, default: 0 },
      anger: { type: Number, default: 0 },
      surprise: { type: Number, default: 0 },
      calm: { type: Number, default: 0 },
    },
    dominantTheme: {
      type: String,
    },
    recurringRate: {
      type: Number,
      default: 0,
    },
    lastDreamDate: {
      type: Date,
    },
  },
  {
    timestamps: { createdAt: false, updatedAt: true }, // tự động cập nhật updatedAt
  }
);

export default mongoose.model("DreamProfile", DreamProfileSchema);
