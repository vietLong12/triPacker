import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  // Tạo Axios instance
  const api = axios.create({
    baseURL: config.public.apiBase, // ✅ Lấy API base từ runtimeConfig
    timeout: 10000, // 10 giây
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  });

  // Interceptors (tuỳ chọn)
  api.interceptors.request.use(
    (config) => {
      // console.log("🔄 Request:", config);
      return config;
    },
    (error) => {
      console.error("❌ Request Error:", error);
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error("❌ API Error:", error.response?.data || error.message);
      return Promise.reject(error);
    }
  );

  // Inject Axios vào Nuxt
  nuxtApp.provide("api", api);
});
