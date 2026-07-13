import axios from "axios";

const configuredBaseURL = (
  import.meta.env.VITE_API_URL || "http://localhost:5001/api"
).replace(/\/$/, "");

const baseURL = configuredBaseURL.endsWith("/api")
  ? configuredBaseURL
  : `${configuredBaseURL}/api`;

const API = axios.create({
  baseURL,
  withCredentials: true,
});

export default API;
