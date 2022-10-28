import axios from "axios";
// import configFile from "../config.json";
const http = axios.create({
  baseURL: "http://localhost:8080/api/",
});

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
};
export default httpService;
