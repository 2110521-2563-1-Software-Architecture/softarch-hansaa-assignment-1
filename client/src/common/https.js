import axios from "axios";

export default () => {
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.baseURL = "http://localhost:5000/api/";
};
