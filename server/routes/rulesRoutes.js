import express from "express";
import {
  getRules,
  updateRulesController
} from "../controllers/rulesController.js";

const router = express.Router();

router.get("/rules", getRules);
router.post("/update-rules", updateRulesController);

export default router;