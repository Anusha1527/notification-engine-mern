export let rules = {
  HIGH_PRIORITY_TYPES: [
    "security_alert",
    "fraud_alert",
    "system_failure"
  ],
  FATIGUE_LIMIT: 3,
  FATIGUE_WINDOW_MINUTES: 10,
  DUPLICATE_THRESHOLD: 0.95
};

// update function
export const updateRules = (newRules) => {
  rules = { ...rules, ...newRules };
  return rules;
};