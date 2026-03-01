// models/Rule.js

import mongoose from "mongoose";

const ruleSchema = new mongoose.Schema(
  {
    HIGH_PRIORITY_TYPES: {
      type: [String],
      default: ["security_alert", "fraud_alert", "system_failure"]
    },

    FATIGUE_LIMIT: {
      type: Number,
      default: 3
    },

    FATIGUE_WINDOW_MINUTES: {
      type: Number,
      default: 10
    },

    DUPLICATE_THRESHOLD: {
      type: Number,
      default: 0.95
    }
  },
  { timestamps: true }
);

const Rule = mongoose.model("Rule", ruleSchema);

export default Rule;