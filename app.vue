<template>
  <el-config-provider>
    <div class="transition-colors duration-500">
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

<script setup lang="ts">
import { ref, watchEffect, onMounted } from "vue";
import { useAuthStore } from "./store/authStore";

const isDark = ref(false);
const authStore = useAuthStore();

// Toggle Dark Mode
const toggleDark = () => {
  isDark.value = !isDark.value;
  updateDarkClass();
};

// Cập nhật class "dark" vào <html>
const updateDarkClass = () => {
  document?.documentElement?.classList.toggle("dark", isDark.value);
};

// Theo dõi thay đổi của isDark để cập nhật theme
watchEffect(() => {
  updateDarkClass();
});

// Kiểm tra Auth + Load Dark Mode khi trang mở lại
onMounted(async () => {
  await authStore.checkAuth('noNotice');
  updateDarkClass();
});
</script>

<style>
@import "element-plus/dist/index.css";
@import "element-plus/theme-chalk/dark/css-vars.css";

/* Dark mode styles */
html.dark {
  background-color: #121212;
  color: #ffffff;
}
</style>
