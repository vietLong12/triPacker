import { ElMessage } from "element-plus";
import type { LoginRequest, RegisterRequest } from "~/types/request";

export default {
  async register(body: RegisterRequest) {
    const { $api } = useNuxtApp();
    try {
      const response = await $api.post("/auth/register", body);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
  async login(body: LoginRequest) {
    const { $api } = useNuxtApp();
    try {
      const response = await $api.post("/auth/login", body);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
};
