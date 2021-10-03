import axios from "axios";

const api = axios.create({
  baseURL: "https://safe-headland-22590.herokuapp.com/api",
});

export default api;
