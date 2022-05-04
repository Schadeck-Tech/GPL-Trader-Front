import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const token = localStorage.getItem("token") || "";
const client_id = localStorage.getItem("id") || "";

if (client_id) {
  api.defaults.params = client_id;
}
if (token) {
  api.defaults.headers.authorization = token;
}

export default api;
