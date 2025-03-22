<template>
  <header class="flex items-center justify-between h-[64px] mx-[20px]">
    <!-- Logo + Title -->
    <div class="flex items-center space-x-2">
      <img
        class="h-[44px]"
        src="../public/logo/tripacker.png"
        alt="TriPacker logo"
      />
      <el-text
        class="font-bold !text-2xl !text-primary-light dark:!text-primary-dark"
        >TriPacker</el-text
      >
    </div>

    <!-- PC Menu -->
    <el-menu
      v-if="!isMobile"
      class="hidden md:flex !border-none !bg-transparent"
      @select="handleSelect"
    >
      <el-menu-item
        index="1"
        class="!text-[16px] font-bold !text-primary-light dark:!text-primary-dark"
        >Tính năng</el-menu-item
      >
      <el-menu-item
        index="2"
        class="!text-[16px] font-bold !text-primary-light dark:!text-primary-dark"
        >Kho cộng đồng</el-menu-item
      >
      <el-menu-item
        index="3"
        class="!text-[16px] font-bold !text-primary-light dark:!text-primary-dark"
        >Đánh giá</el-menu-item
      >
      <el-menu-item
        index="4"
        class="!text-[16px] font-bold !text-primary-light dark:!text-primary-dark"
        >FAQ</el-menu-item
      >
      <el-menu-item
        index="5"
        class="!text-[16px] font-bold !text-primary-light dark:!text-primary-dark"
        >Liên hệ</el-menu-item
      >
      <el-menu-item
        index="6"
        class="!text-[16px] font-bold !text-primary-light dark:!text-primary-dark"
        >Đăng nhập</el-menu-item
      >
      <el-menu-item
        index="7"
        class="!text-[16px] font-bold !text-primary-light dark:!text-primary-dark"
        >Đăng ký</el-menu-item
      >
    </el-menu>

    <!-- Mobile hamburger -->
    <el-button
      class="md:hidden"
      v-if="isMobile"
      @click="drawer = true"
      icon="Menu"
      circle
    />

    <!-- Drawer mobile -->
    <el-drawer
      v-model="drawer"
      direction="rtl"
      size="220px"
      :with-header="false"
    >
      <el-menu
        :default-active="activeIndex"
        mode="vertical"
        @select="handleSelect"
        background-color="transparent"
        text-color="#1e293b"
        active-text-color="#0ea5e9"
      >
        <el-menu-item index="1">Tính năng</el-menu-item>
        <el-menu-item index="2">Kho cộng đồng</el-menu-item>
        <el-menu-item index="3">Đánh giá</el-menu-item>
        <el-menu-item index="4">FAQ</el-menu-item>
        <el-menu-item index="5">Liên hệ</el-menu-item>
      </el-menu>
    </el-drawer>
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const drawer = ref(false);
const activeIndex = ref("1");
const isMobile = ref(false);

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
  drawer.value = false; // tự đóng drawer khi click
};

onMounted(() => {
  // Check màn hình mobile
  const handleResize = () => {
    isMobile.value = window.innerWidth < 768;
  };
  handleResize();
  window.addEventListener("resize", handleResize);
});
</script>

<style scoped>
/* Giữ nguyên margin auto cho logo */
header .el-menu-item:first-child {
  margin-right: auto;
}
</style>
