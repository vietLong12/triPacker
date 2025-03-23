<template>
  <div
    class="min-h-screen flex justify-center items-start py-12 px-4 relative overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-cover bg-bottom bg-no-repeat transition-all duration-500"
      :style="{ backgroundImage: `url(${bgMap[bgImage]})` }"
    >
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-400/60 via-teal-400/50 to-green-300/40 backdrop-blur-sm"
      ></div>
    </div>

    <div
      class="relative w-full max-w-4xl space-y-12 bg-white/80 dark:bg-black/80 p-8 rounded-xl shadow-2xl z-10"
    >
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold">Thông tin chuyến đi</h2>
        <el-button type="primary" :icon="Download" @click="importTemplate" />
      </div>

      <FormCreateTemplate @update:trip-type="handleTripTypeChange" />
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

// Map tripType => background image
const bgMap: Record<string, string> = {
  travel: bgSea,
  adventure: bgForest,
  business: bgBusiness,
  family: bgFamily,
  other: bgFestival,
};

const bgImage = ref("travel");

const handleTripTypeChange = (value: string) => {
  console.log("Change trip type to:", value);
  bgImage.value = value;
};

const importTemplate = () => {
  console.log("Import template");
};
</script>
