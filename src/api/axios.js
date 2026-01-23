import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // adjust if needed
  withCredentials: true, // 🔑 REQUIRED for cookies
});

// 🔄 Auto refresh token on 401
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        await api.post("auth/token/refresh/");
        return api(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
