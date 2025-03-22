<!-- components/FeatureCard.vue -->
<template>
  <el-card class="!text-primary-light dark:!text-primary-dark">
    <h3 class="font-semibold text-lg mb-2">{{ title }}</h3>
    <p class="text-sm">{{ description }}</p>
  </el-card>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
});
</script>
