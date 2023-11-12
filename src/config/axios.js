import axios from "axios";
import config from "./config.json";

const api = axios.create({
  baseURL: config["baseUrl"],
  timeout: 2000000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export default api;
