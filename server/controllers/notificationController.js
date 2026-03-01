import Notification from "../models/Notification.js";
import { decideNotification } from "../services/decisionService.js";

/*
====================================
CREATE NOTIFICATION
====================================
*/
export const createNotification = async (req, res) => {
  try {
    const data = req.body;

    const result = await decideNotification(data);

    const notification = new Notification({
      ...data,
      decision: result.decision,
      score: result.score,
      explanation: result.explanation,
    });

    await notification.save();

    res.status(200).json(notification);
  } catch (error) {
    console.error("CREATE ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

/*
====================================
GET LOGS (✅ THIS WAS MISSING)
====================================
*/
export const getLogs = async (req, res) => {
  try {
    const logs = await Notification.find().sort({ createdAt: -1 });
    res.json(logs);
  } catch (error) {
    console.error("LOG ERROR:", error);
    res.status(500).json({ error: "Failed to fetch logs" });
  }
};