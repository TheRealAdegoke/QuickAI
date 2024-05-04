import axios from "axios";

export const axiosInstance = axios.create({
  timeout: 10000,
  withCredentials: true,
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
});