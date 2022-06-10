import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `http://localhost:5500/api/v1/`,
});

export default axiosInstance;
