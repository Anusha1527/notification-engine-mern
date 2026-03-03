router.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Received:", email, password);

  if (
    (email === "admin@cyepro.com" && password === "Admin@123") ||
    (email === "operator@cyepro.com" && password === "Operator@123")
  ) {
    return res.json({ message: "Login successful" });
  }

  res.status(401).json({ message: "Invalid credentials" });
});