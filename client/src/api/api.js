import axios from "axios";

export const API = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://notification-engine-api-9zyy.onrender.com/api",
});