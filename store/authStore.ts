import { ElMessage } from "element-plus";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    resData: {} as any,
    isLogged: false,
  }),
  actions: {
    async checkAuth(notice: string) {
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
        this.isLogged = false;
        console.log("notice: ", notice);
        if (notice !== "noNotice") {
          ElMessage.error(
            "Bạn chưa đăng nhập hoặc phiên đăng nhập đã hết hạn."
          );
        }
      }
    },
    async getInformation() {
      try {
        const { $api } = useNuxtApp(); // Lấy API từ NuxtApp
        const response = await $api.get("/user/userInformation");
        console.log("response: ", response);
      } catch (error) {
        console.log("error: ", error);
        ElMessage.error("Bạn chưa đăng nhập hoặc phiên đăng nhập đã hết hạn.");
      }
    },
    async logout() {
      try {
        const { $api } = useNuxtApp(); // Lấy API từ NuxtApp
        const response = await $api.post("/auth/logout");
        console.log("response: ", response);
        if (response.status === 200) {
          this.isLogged = false;
          ElMessage.success("Đăng xuất thành công.");
          return true;
        } else {
          ElMessage.error("Đăng xuất không thành công.");
          return false;
        }
      } catch (error) {
        console.log("error: ", error);
        ElMessage.error("Đăng xuất không thành công.");
        return false;
      }
    },
  },
});
