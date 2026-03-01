import Notification from "../models/Notification.js";
import Rule from "../models/Rule.js";

// ===============================
// Check Notification Fatigue
// ===============================
export const checkFatigue = async (user_id) => {
  const rules = await Rule.findOne();

  if (!rules) return false;

  const windowMinutes = rules.FATIGUE_WINDOW_MINUTES;
  const limit = rules.FATIGUE_LIMIT;

  // Time window calculation
  const timeWindow = new Date(
    Date.now() - windowMinutes * 60 * 1000
  );

  // Count recent notifications
  const recentCount = await Notification.countDocuments({
    user_id,
    createdAt: { $gte: timeWindow }
  });

  console.log(
    `Fatigue check → user:${user_id} count:${recentCount}`
  );

  // Fatigue triggered
  return recentCount >= limit;
};