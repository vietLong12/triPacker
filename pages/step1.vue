<template>
  <div class="min-h-screen flex justify-center items-start py-12 px-4 relative overflow-hidden">
    <div class="absolute inset-0 transition-all duration-500 custom-bg"
      :style="{ backgroundImage: `url(${bgMap[bgImage]})` }"></div>

    <div class="relative w-full max-w-4xl space-y-12 bg-white/80 dark:bg-black/80 p-8 rounded-xl shadow-2xl z-10">
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold">Thông tin chuyến đi</h2>
        <el-button type="primary" :icon="Download" @click="importTemplate" />
      </div>

      <FormCreateTemplate @update:trip-type="handleTripTypeChange" :list-type-trip="listTypeTrip" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import FormCreateTemplate from "../components/Form/FormCreateTemplate.vue";
import { Download } from "@element-plus/icons-vue";
import bgSea from "../assets/bg/bg-sea.avif";
import bgBusiness from "../assets/bg/bg-business.avif";
import bgForest from "../assets/bg/bg-forest.avif";
import bgFamily from "../assets/bg/bg-family.avif";
import bgFestival from "../assets/bg/bg-festival.avif";
import { useAppStore } from "~/store/appStore";
import templateService from "~/services/templateService";
import type { TypeTrip } from "~/types/response";

const appStore = useAppStore();
const bgMap: Record<string, string> = {
  "Du Lịch": bgSea,
  "Công tác": bgForest,
  business: bgBusiness,
  family: bgFamily,
  other: bgFestival,
};

const listTypeTrip = ref<TypeTrip[] | []>([]);

const bgImage = ref("travel");

const handleTripTypeChange = (value: string) => {
  console.log("Change trip type to:", value);
  bgImage.value = value;
  appStore.bgImage = bgMap[value];
};

const importTemplate = () => {
  console.log("Import template");
};

onMounted(async () => {
  const res = await templateService.getTypeTrip();
  listTypeTrip.value = res.data;
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
