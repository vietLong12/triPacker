import { ElMessage } from "element-plus";
import type { TemplateTrip } from "~/types/request";

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
  async createTemplateTrip(body: TemplateTrip) {
    const { $api } = useNuxtApp();
    try {
      const response = await $api.post(`/template/create`, body);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
};
