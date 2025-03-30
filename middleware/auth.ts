import { ElMessageBox } from "element-plus";
import { useAuthStore } from "~/store/authStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();

  if (!authStore.isLogged && process.client) {
    try {
      await ElMessageBox.confirm(
        "Bạn cần đăng nhập để sử dụng tính năng này. Bạn có muốn tiếp tục không?",
        "Xác nhận",
        {
          confirmButtonText: "Đến trang đăng nhập",
          cancelButtonText: "Hủy",
          type: "warning",
        }
      );
      return navigateTo(`/auth/login?redirect=${to.fullPath}`);
    } catch {
      // Người dùng chọn "Hủy" => Chặn truy cập bằng cách quay lại trang trước đó
      return navigateTo(from.fullPath || "/");
    }
  }
});
