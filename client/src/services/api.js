import axios from "axios";

const API = axios.create({
  baseURL: "https://vip-c2-shopez-e-commerceapplication-1.onrender.com/api"
});

export default API;