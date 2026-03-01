import Rule from "../models/Rule.js";
import { checkDuplicate } from "./duplicateService.js";
import { checkFatigue } from "./fatigueService.js";
import { getAIScore } from "./aiScoringService.js";

export const decideNotification = async (event) => {

  const rules = await Rule.findOne();

  let score = 0;
// ===============================
// FALLBACK RULE ENGINE
// ===============================
const fallbackScore = (event) => {

  switch (event.event_type) {
    case "security_alert":
      return 85;

    case "fraud_alert":
      return 90;

    case "reminder":
      return 50;

    case "promotion":
      return 20;

    default:
      return 40;
  }
};
  // ======================
  // AI SCORE
  // ======================
  const aiScore = await getAIScore(event);
  score += Number(aiScore) || fallbackScore(event);
  // ======================
  // HIGH PRIORITY BONUS
  // ======================
  if (rules?.HIGH_PRIORITY_TYPES.includes(event.event_type)) {
    score += 20;
  }

  // ======================
  // DUPLICATE CHECK
  // ======================
  const duplicate = await checkDuplicate(
    event.user_id,
    event.message
  );

  if (duplicate) {
    return {
      decision: "Never",
      score,
      explanation: "Duplicate notification detected",
    };
  }

  // ======================
  // FATIGUE CHECK
  // ======================
  const fatigue = await checkFatigue(event.user_id);

  if (fatigue && score < 70) {
    return {
      decision: "Later",
      score,
      explanation: "User fatigue detected",
    };
  }

  // ======================
  // FINAL DECISION
  // ======================
  if (score >= 80) {
    return {
      decision: "Now",
      score,
      explanation: "AI classified as high priority",
    };
  }

  if (score >= 40) {
    return {
      decision: "Later",
      score,
      explanation: "AI classified as medium priority",
    };
  }

  return {
    decision: "Never",
    score,
    explanation: "Low priority notification",
  };
};