import axios from "axios";

export const api = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://my-pharma.onrender.com",
  timeout: 5000,
});
