import { rules, updateRules } from "../services/rulesStore.js";

export const getRules = (req, res) => {
  res.json(rules);
};

export const updateRulesController = (req, res) => {
  try {
    const newRules = req.body;

    const updated = updateRules(newRules);

    res.json({
      message: "Rules updated successfully",
      current_rules: updated
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};