import { ElMessage } from "element-plus";

export default {
  async getTypeTrip() {
    const { $api } = useNuxtApp();
    try {
      const response = await $api.get("/backgroundTemplate/getTripTypes");
      return response.data;
    } catch (error: any) {
      ElMessage.error(error.message);
      throw error;
    }
  },
  async getBackgroundTemplateByIdTemplate(idTemplate: string) {
    const { $api } = useNuxtApp();
    try {
      const response = await $api.get(
        `/backgroundTemplate/getBackGrounds/${idTemplate}`
      );
      return response.data;
    } catch (error: any) {
      ElMessage.error(error.message);
      throw error;
    }
  },
};
