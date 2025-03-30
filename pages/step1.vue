<template>
  <div class="min-h-screen flex justify-center items-start py-12 px-4 relative overflow-hidden">
    <!-- Background with transition effect -->
    <div class="absolute inset-0 transition-opacity duration-500 ease-in-out custom-bg"
      :class="{ 'opacity-0': isLoading, 'opacity-100': !isLoading }"
      :style="bgImage ? { backgroundImage: `url(${bgImage})` } : { backgroundColor: 'transparent' }">
    </div>

    <div class="relative w-full max-w-4xl space-y-12 bg-white/80 dark:bg-black/80 p-8 rounded-xl shadow-2xl z-10">
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold">Thông tin chuyến đi</h2>
        <el-button type="primary" :icon="Download" @click="importTemplate" />
      </div>

      <FormCreateTemplate @update:trip-type="handleTripTypeChange" :list-type-trip="listTypeTrip"
        :backgroundId="backgroundId" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import FormCreateTemplate from "../components/Form/FormCreateTemplate.vue";
import { Download } from "@element-plus/icons-vue";
import { useAppStore } from "~/store/appStore";
import templateService from "~/services/templateService";
import type { TypeTrip } from "~/types/response";
import { ElMessage } from "element-plus";

const appStore = useAppStore();
const listTypeTrip = ref<TypeTrip[] | []>([]);
const bgImage = ref("");
const isLoading = ref(false);
const backgroundId = ref('')


const handleTripTypeChange = async (value: string) => {
  console.log("Change trip type to:", value);
  isLoading.value = true;
  try {
    const res = await templateService.getBackgroundTemplateByIdTemplate(value);
    bgImage.value = res.data.url;
    backgroundId.value = res.data._id
  } catch (error: any) {
    const code = error.response?.data?.message || 'default'
    ElMessage.error(t(`errors.background.${code}`))
  }
  finally {
    setTimeout(() => {
      isLoading.value = false;
    }, 500);
  }
};

const importTemplate = () => {
  console.log("Import template");
};

onMounted(async () => {
  const res = await templateService.getTypeTrip();
  listTypeTrip.value = res.data;
});

definePageMeta({
  middleware: 'auth',
});
</script>

<style scoped>
.custom-bg {
  background-repeat: no-repeat !important;
  background-position: center center !important;
  background-size: cover !important;
  background-attachment: fixed !important;
}
</style>