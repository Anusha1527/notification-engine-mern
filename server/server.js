import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config(); // MUST be first
console.log("OPENAI KEY:", process.env.OPENAI_API_KEY);
import connectDB from "./config/db.js";
import rulesRoutes from "./routes/rulesRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import logRoutes from "./routes/logRoutes.js";
import authRoutes from "./routes/auth.js";
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", notificationRoutes);
app.use("/api", logRoutes);
app.use("/api", rulesRoutes);
// Health check
app.get("/", (req, res) => {
  res.json({
    service: "Notification Engine MERN Backend",
    status: "running",
  });
});

const PORT = process.env.PORT || 5000;
app.get("/health", (req, res) => {
  res.json({ status: "OK", service: "Notification Engine API" });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

