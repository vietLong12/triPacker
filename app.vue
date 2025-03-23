<template>
  <el-config-provider :theme="{ dark: isDark }">
    <div class="min-h-screen transition-colors duration-500">
      <NuxtLayout />
      <NuxtPage />
      <button
        @click="toggleDark"
        class="fixed bottom-4 right-4 px-4 py-2 bg-primary text-white rounded shadow-lg z-50"
      >
        Toggle Dark
      </button>
    </div>
  </el-config-provider>
</template>

<script setup>
import { ElLoading } from "element-plus";
import { ref, onMounted, watch } from "vue";

const isDark = ref(false);

// toggle + update html class
const toggleDark = () => {
  isDark.value = !isDark.value;
};

// auto cập nhật class cho <html>
watch(isDark, (val) => {
  if (val) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});

// init khi load lại trang
onMounted(() => {
  if (isDark.value) {
    document.documentElement.classList.add("dark");
  }
});
</script>

<style>
@import "element-plus/dist/index.css";
@import "element-plus/theme-chalk/dark/css-vars.css";
</style>
