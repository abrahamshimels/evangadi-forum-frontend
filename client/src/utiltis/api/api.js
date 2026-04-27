import axios from "axios";

const HEALTH_CHECK_URL = "https://evangadi-forum-backend-j59e.onrender.com/health";

const instance = axios.create({
  baseURL: "https://evangadi-forum-backend-j59e.onrender.com/api",
});

// to include token in every request
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Fire-and-forget request to wake the hosted backend on key route visits.
export const warmUpBackendHealth = () => {
  fetch(HEALTH_CHECK_URL, {
    method: "GET",
    mode: "no-cors",
    keepalive: true,
  }).catch(() => {
    // Keep this silent so page behavior remains unchanged.
  });
};

export default instance;
