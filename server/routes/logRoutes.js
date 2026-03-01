import express from "express";
import Notification from "../models/Notification.js";

const router = express.Router();

// GET all logs
router.get("/logs", async (req, res) => {
  try {
    const logs = await Notification.find().sort({ createdAt: -1 });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch logs" });
  }
});

export default router;