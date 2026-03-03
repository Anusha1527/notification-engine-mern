import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          email,
          password,
        }
      );

      console.log("Login response:", response.data);

      alert("Login successful");
      navigate("/send");

    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        alert(error.response.data?.message || "Invalid credentials");
      } else {
        alert("Server not reachable. Please try again.");
      }
    }
  };

  const fillAdmin = () => {
    setEmail("admin@cyepro.com");
    setPassword("Admin@123");
  };

  const fillOperator = () => {
    setEmail("operator@cyepro.com");
    setPassword("Operator@123");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">🔔</div>
        <h1>Cyepro</h1>
        <p>Notification Prioritization Engine</p>

        <div className="demo-box">
          <p>DEMO CREDENTIALS — CLICK TO FILL</p>
          <div className="demo-options">
            <div onClick={fillAdmin} className="demo-item">
              <h4>Admin</h4>
              <span>admin@cyepro.com</span>
              <span>Admin@123</span>
            </div>

            <div onClick={fillOperator} className="demo-item">
              <h4>Operator</h4>
              <span>operator@cyepro.com</span>
              <span>Operator@123</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}