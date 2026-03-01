import Notification from "../models/Notification.js";
import stringSimilarity from "string-similarity";
import Rule from "../models/Rule.js";

// ===============================
// Duplicate Detection
// ===============================
export const checkDuplicate = async (user_id, message) => {

  console.log("🔎 Duplicate check started");

  const rules = await Rule.findOne();

  if (!rules) {
    console.log("⚠️ No rules found");
    return false;
  }

  const threshold = rules.DUPLICATE_THRESHOLD;
  console.log("Threshold:", threshold);

  const recentNotifications = await Notification
    .find({ user_id })
    .sort({ createdAt: -1 })
    .limit(30);

  console.log("Recent notifications:", recentNotifications.length);

  for (let notif of recentNotifications) {

    console.log("Comparing with:", notif.message);

    // Exact match
    if (notif.message === message) {
      console.log("❌ Exact duplicate detected");
      return true;
    }

    const similarity = stringSimilarity.compareTwoStrings(
      notif.message.toLowerCase(),
      message.toLowerCase()
    );

    console.log("Similarity:", similarity);

    if (similarity >= threshold) {
      console.log("❌ Similar duplicate detected");
      return true;
    }
  }

  console.log("✅ No duplicate found");
  return false;
};