import { ElMessage } from "element-plus";

export default {
  async getTypeTrip() {
    const { $api } = useNuxtApp();
    try {
      const response = await $api.get("/tripType/get");
      return response.data;
    } catch (error: any) {
      ElMessage.error(error.message);
      throw error;
    }
  },
};
