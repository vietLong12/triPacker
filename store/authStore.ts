import { ElMessage } from "element-plus";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    resData: {} as any,
    isLogged: false,
  }),
  actions: {
    async checkAuth() {
      try {
        const { $api } = useNuxtApp(); // Lấy API từ NuxtApp
        const response = await $api.get("/user/me");
        console.log("response: ", response);

        if (response.status === 200) {
          console.log("response.status: ", response.status);
          this.isLogged = true;
        } else {
          this.isLogged = false;
        }
      } catch (error) {
        this.isLogged = false; // Đảm bảo cập nhật trạng thái
        ElMessage.error("Bạn chưa đăng nhập hoặc phiên đăng nhập đã hết hạn.");
      }
    },
    async getInformation() {
      try {
        const { $api } = useNuxtApp(); // Lấy API từ NuxtApp
        const response = await $api.get("/user/userInformation");
        console.log("response: ", response);

        
      } catch (error) {
        console.log('error: ', error);
        ElMessage.error("Bạn chưa đăng nhập hoặc phiên đăng nhập đã hết hạn.");
      }
    },
  },
});
