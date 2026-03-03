import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  console.log("Login route working");
  return res.json({ message: "Login successful" });
});

export default router;