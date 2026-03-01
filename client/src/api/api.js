import axios from "axios";

export const API = axios.create({
  baseURL: "https://notification-engine-api-9zyy.onrender.com/api",
});