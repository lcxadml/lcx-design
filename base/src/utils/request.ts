import axios from "axios";

const service = axios.create({
  baseURL: "/api", // 可根据不同环境切换
  timeout: 5000,
});

service.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);

export default service;
