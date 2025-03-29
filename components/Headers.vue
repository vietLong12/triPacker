<template>
  <div>
    <header class="z-30 backdrop-blur-lg bg-yellow-50 shadow-sm dark:shadow dark:shadow-black/20 dark:bg-[#0A0A0A]">
      <div class="flex items-center justify-between max-w-7xl mx-auto h-[72px] px-6 md:px-12">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <img class="h-[48px] object-contain transition-transform duration-300 group-hover:scale-105"
            src="../public/logo/tripacker.png" alt="TriPacker logo" />
          <span
            class="font-extrabold text-2xl group-hover:text-primary-light dark:group-hover:text-secondary-dark transition-colors">
            TriPacker
          </span>
        </NuxtLink>

        <!-- PC Menu -->
        <nav class="hidden md:flex gap-6 items-center">
          <NuxtLink v-for="(item, index) in menuItems" :key="index" :to="item.to"
            class="text-[16px] font-semibold hover:text-primary-dark dark:hover:text-secondary-dark transition">
            {{ item.label }}
          </NuxtLink>

          <!-- Nếu đã đăng nhập thì hiển thị Avatar -->
          <el-dropdown v-if="isLogged" trigger="hover">
            <span class="flex items-center cursor-pointer">
              <el-avatar :size="40" src="https://i.pravatar.cc/150?img=3" />
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="goToProfile">Hồ sơ</el-dropdown-item>
                <el-dropdown-item @click="goToSettings">Cài đặt</el-dropdown-item>
                <el-dropdown-item divided @click="logout">Đăng xuất</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <!-- Nếu chưa đăng nhập thì hiển thị "Đăng nhập/Đăng ký" -->
          <template v-else>
            <NuxtLink to="/auth/login"
              class="text-[16px] font-semibold hover:text-primary-dark dark:hover:text-secondary-dark transition">
              Đăng nhập
            </NuxtLink>
            <NuxtLink to="/auth/register"
              class="text-[16px] font-semibold hover:text-primary-dark dark:hover:text-secondary-dark transition">
              Đăng ký
            </NuxtLink>
          </template>
        </nav>

        <!-- Mobile hamburger -->
        <div class="block md:hidden">
          <el-button @click="drawer = true" :icon="Menu" circle type="primary" plain></el-button>
        </div>
      </div>
    </header>

    <!-- Drawer menu cho mobile -->
    <el-drawer v-model="drawer" direction="rtl" size="240px" :with-header="false">
      <nav class="flex flex-col gap-4 mt-4 px-4">
        <NuxtLink v-for="(item, index) in mobileMenuItems" :key="index" :to="item.to"
          class="text-[16px] font-medium text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition"
          @click="drawer = false">
          {{ item.label }}
        </NuxtLink>

        <!-- Nếu chưa đăng nhập, hiển thị đăng nhập / đăng ký -->
        <template v-if="!isLogged">
          <NuxtLink to="/auth/login"
            class="text-[16px] font-medium text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition"
            @click="drawer = false">
            Đăng nhập
          </NuxtLink>
          <NuxtLink to="/auth/register"
            class="text-[16px] font-medium text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition"
            @click="drawer = false">
            Đăng ký
          </NuxtLink>
        </template>

        <!-- Nếu đã đăng nhập, hiển thị menu tài khoản -->
        <template v-else>
          <el-button @click="goToProfile" class="w-full" type="primary" text>Hồ sơ</el-button>
          <el-button @click="goToSettings" class="w-full" type="primary" text>Cài đặt</el-button>
          <el-button @click="logout" class="w-full" type="danger" text>Đăng xuất</el-button>
        </template>
      </nav>

    </el-drawer>
    {{ isLogged }}
  </div>
</template>


<script lang="ts" setup>
import { ref } from "vue";
import { Menu } from "@element-plus/icons-vue";
import { useAuthStore } from "~/store/authStore";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

const drawer = ref(false);
const router = useRouter();

const authStore = useAuthStore();
const { isLogged } = storeToRefs(authStore);


const menuItems = [
  { to: "#features", label: "Tính năng" },
  { to: "#community", label: "Kho cộng đồng" },
  { to: "#reviews", label: "Đánh giá" },
  { to: "#faq", label: "FAQ" },
  { to: "#contact", label: "Liên hệ" },
];

// Mobile menu chỉ hiển thị 5 mục đầu
const mobileMenuItems = menuItems.slice(0, 5);

// Chuyển hướng đến trang Hồ sơ
const goToProfile = () => {
  router.push("/info/profile");
  authStore.getInformation()
};

// Chuyển hướng đến trang Cài đặt
const goToSettings = () => {
  router.push("/info/settings");
};

// Xử lý đăng xuất
const logout = () => {
  authStore.isLogged = false; // Cập nhật trạng thái đăng nhập
  router.push("/auth/login"); // Điều hướng về trang đăng nhập
};
</script>
