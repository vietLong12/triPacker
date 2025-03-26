export default {
    async getTypeTrip() {
      const { $api } = useNuxtApp(); // ✅ Lấy Axios từ Nuxt Plugin
      try {
        const response = await $api.get("/tripType/get");
        return response.data;
      } catch (error) {
        console.error("❌ Lỗi khi lấy danh sách loại chuyến đi:", error);
        throw error;
      }
    },
  };
  