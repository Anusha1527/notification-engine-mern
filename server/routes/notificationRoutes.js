import express from "express";
import {
  createNotification,
  getLogs
} from "../controllers/notificationController.js";

const router = express.Router();

router.post("/notify", createNotification);
router.get("/logs", getLogs);

export default router;