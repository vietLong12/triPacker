<template>
  <div>
    <header
      class="fixed-top top-0 z-30 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-sm dark:shadow dark:shadow-black/20"
    >
      <div
        class="flex items-center justify-between max-w-7xl mx-auto h-[72px] px-6 md:px-12"
      >
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <img
            class="h-[48px] object-contain transition-transform duration-300 group-hover:scale-105"
            src="../public/logo/tripacker.png"
            alt="TriPacker logo"
          />
          <span
            class="font-extrabold text-2xl text-gray-900 dark:text-white group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors"
          >
            TriPacker
          </span>
        </NuxtLink>

        <!-- PC Menu -->
        <nav class="hidden md:flex gap-6 items-center">
          <NuxtLink
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.to"
            class="text-[16px] font-semibold hover:text-primary-dark dark:hover:text-secondary-dark transition"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- Mobile hamburger -->
        <div class="block md:hidden">
          <el-button
            class=""
            @click="drawer = true"
            :icon="Menu"
            circle
            type="primary"
            plain
          ></el-button>
        </div>
      </div>
    </header>

    <!-- Drawer phải ở ngoài header -->
    <el-drawer
      v-model="drawer"
      direction="rtl"
      size="240px"
      :with-header="false"
    >
      <nav class="flex flex-col gap-4 mt-4 px-4">
        <NuxtLink
          v-for="(item, index) in mobileMenuItems"
          :key="index"
          :to="item.to"
          class="text-[16px] font-medium text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition"
          @click="drawer = false"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Menu } from "@element-plus/icons-vue";

const drawer = ref(false);

const menuItems = [
  { to: "#features", label: "Tính năng" },
  { to: "#community", label: "Kho cộng đồng" },
  { to: "#reviews", label: "Đánh giá" },
  { to: "#faq", label: "FAQ" },
  { to: "#contact", label: "Liên hệ" },
  { to: "/login", label: "Đăng nhập" },
  { to: "/register", label: "Đăng ký" },
];

const mobileMenuItems = menuItems.slice(0, 5);
</script>
