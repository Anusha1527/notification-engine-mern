import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  event_type: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  source: {
    type: String
  },

  decision: {
    type: String,
    enum: ["Now", "Later", "Never"]
  },

  score: {
    type: Number
  },

  explanation: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Notification", NotificationSchema);