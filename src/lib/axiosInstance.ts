import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://${import.meta.env.VITE_BASE}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
