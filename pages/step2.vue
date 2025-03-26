<template>
  <div class="min-h-screen relative">
    <!-- Background Image -->
    <div class="absolute top-0 left-0 w-full h-full bg-cover bg-top bg-no-repeat transition-all duration-500 z-0"
      :style="{ backgroundImage: `url(${appStore.bgImage})` }" :class="{
        'dark:bg-cover': true,
        'dark:bg-top': true,
        'dark:bg-no-repeat': true,
        'dark:filter': true,
        'dark:brightness-50': true,
      }"></div>

    <!-- Content Layer -->
    <div class="relative z-10 p-6 space-y-8">
      <!-- Trip Info -->
      <div
        class="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 p-4 rounded-lg shadow-lg dark:bg-gradient-to-r dark:from-purple-900 dark:via-pink-800 dark:to-red-700">
        <div class="flex gap-4 items-center dark:text-gray-200">
          <span class="font-bold text-xl">TriPacker: Vivu Cao Bằng with Fr</span>
        </div>
        <div class="flex gap-4 text-sm text-white dark:text-gray-300">
          <div class="bg-purple-600 px-3 py-1 rounded-full shadow-md dark:bg-purple-700">
            Ngày đi: <b class="font-bold">24/03/2025</b>
          </div>
          <div class="bg-green-600 px-3 py-1 rounded-full shadow-md dark:bg-green-700">
            Ngày về: <b class="font-bold">27/03/2025</b>
          </div>
          <div class="bg-yellow-500 px-3 py-1 rounded-full shadow-md dark:bg-yellow-600">
            Còn: <b class="font-bold">2</b> ngày
          </div>
        </div>
      </div>

      <!-- Checklist -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-4 py-4">
        <el-card v-for="(category, idx) in categories" :key="idx"
          class="p-0 space-y-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
          <!-- Tiêu đề và biểu tượng -->
          <div
            class="font-medium flex items-center space-x-2 text-[16px] mb-3 justify-center dark:text-white bg-indigo-100 dark:bg-indigo-700 py-1 rounded shadow-md hover:shadow-xl transition-all duration-300">
            <span
              class="text-indigo-600 dark:text-secondary-light hover:text-indigo-800 dark:hover:text-secondary-dark transition-colors duration-300">{{
                category.title }}</span>
            <svg-icon type="mdi" :path="category.icon"
              class="w-4 h-4 text-indigo-600 dark:text-secondary-light hover:text-indigo-800 dark:hover:text-secondary-dark transition-colors duration-300" />
          </div>

          <!-- Ô tìm kiếm để thêm mục -->
          <el-input placeholder="Tìm kiếm..." :prefix-icon="Search" class="mb-3" size="small" />

          <!-- Hiển thị các mục đã chọn -->
          <div v-if="category.selectedItems.length > 0">
            <div v-for="(item, itemIdx) in category.selectedItems" :key="itemIdx"
              class=" flex justify-between items-center text-sm mb-2 py-1 px-3 rounded-md bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all">
              <span>{{ item }}</span>
              <el-button type="text" size="small" @click="removeItem(category, item)"
                class="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100">
                <svg-icon type="mdi" :path="mdiMinus" class="w-4 h-4" />
              </el-button>
            </div>
          </div>
          <!-- Nếu không có dữ liệu -->
          <div v-else class="text-center dark:text-gray-300 py-0">
            <el-empty :image-size="80" class="!py-0" />
          </div>
        </el-card>
      </div>

      <!-- Current Weather -->
      <el-card
        class="mt-8 bg-gradient-to-r from-indigo-50 to-indigo-100 space-y-4 dark:bg-gradient-to-r dark:from-blue-900 dark:to-blue-700 dark:text-white">
        <!-- Nội dung của card -->

        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex items-center gap-3">
            <div class="text-3xl">🌤️</div>
            <div>
              <div class="text-lg font-semibold">Hà Nội, Việt Nam</div>
              <div class="text-sm">Trời nắng nhẹ</div>
            </div>
          </div>
          <div class="flex gap-6 text-sm">
            <div>
              <div class="font-medium">Nhiệt độ:</div>
              <div>29°C</div>
            </div>
            <div>
              <div class="font-medium">Gió:</div>
              <div>12 km/h</div>
            </div>
            <div>
              <div class="font-medium">Độ ẩm:</div>
              <div>60%</div>
            </div>
            <div>
              <div class="font-medium">Cảm giác như:</div>
              <div>31°C</div>
            </div>
          </div>
        </div>

        <!-- Weather Forecast -->
        <div class="mt-4">
          <h3 class="text-sm font-semibold mb-2">
            ⛅ Dự báo thời tiết tại Cao Bằng (3 ngày tới)
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <el-card v-for="(day, idx) in forecast" :key="idx" class="p-3 space-y-2" shadow="hover">
              <div class="flex justify-between items-center">
                <span class="font-semibold">{{ day.date }}</span>
                <span class="text-lg">{{ day.icon }}</span>
              </div>
              <div class="text-sm">{{ day.condition }}</div>
              <div class="flex justify-between text-xs">
                <span>Nhiệt độ: {{ day.temp }}</span>
                <span>Gió: {{ day.wind }}</span>
              </div>
            </el-card>
          </div>
        </div>
      </el-card>

      <!-- Important Notes -->
      <el-card class="mt-8 border-l-4 border-rose-400 bg-rose-50 rounded-lg space-y-3">
        <h3 class="font-semibold text-rose-700 text-lg flex items-center">
          <el-icon class="mr-1"><warn-triangle-filled /></el-icon> Lưu ý quan
          trọng
        </h3>
        <ul class="list-disc pl-5 space-y-1 text-sm">
          <li>
            Thời tiết tại Cao Bằng dự báo có mưa, hãy chuẩn bị áo mưa và giày
            chống nước.
          </li>
          <li>
            Bạn chưa tick: <strong>Passport, Thuốc cá nhân</strong> trong
            checklist.
          </li>
          <li>
            Chuẩn bị sạc dự phòng, đề phòng mất điện khi di chuyển đường dài.
          </li>
          <li>
            Điều chỉnh hành lý phù hợp vì Cao Bằng có thể lạnh vào buổi tối
            (21°C).
          </li>
        </ul>
      </el-card>
      <!-- Ghi chú nhanh và Nhóm đi cùng gộp thành một dòng -->
      <el-row class="mt-10" :gutter="20">
        <!-- Ghi chú nhanh -->
        <el-col :span="12">
          <el-card class="border rounded space-y-2 h-full">
            <h4 class="font-semibold text-indigo-700 text-lg flex items-center mb-2">
              <el-icon class="mr-1">
                <Notebook />
              </el-icon> Ghi chú nhanh
            </h4>
            <el-input type="textarea" placeholder="Nhập ghi chú nhanh cho chuyến đi của bạn..." :rows="5"></el-input>
          </el-card>
        </el-col>

        <!-- Nhóm đi cùng -->
        <el-col :span="12">
          <el-card class="border rounded space-y-2 h-full">
            <h4 class="font-semibold text-orange-600 text-lg flex items-center" @click="dialogGroupRef.showDialog()">
              <svg-icon type="mdi" :path="mdiAccountGroupOutline" class="mr-1"></svg-icon>
              Nhóm đi cùng
            </h4>
            <p class="text-sm">Đi cùng: Nam, Linh, Duy</p>
            <p class="text-sm">Phân chia vật dụng:</p>
            <ul class="list-disc pl-5 text-sm space-y-1">
              <li>Nam: Dụng cụ y tế & thuốc</li>
              <li>Linh: Đồ ăn nhẹ & nước uống</li>
              <li>Duy: Thiết bị điện tử & sạc</li>
            </ul>
          </el-card>
        </el-col>
      </el-row>

      <!-- Additional Utilities -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <!-- Trọng lượng hành lý -->
        <el-card class="border rounded space-y-2">
          <h4 class="font-semibold text-pink-600 text-lg">
            ⚖️ Trọng lượng hành lý
          </h4>
          <p class="text-sm">
            Hiện tại: <strong>7.5kg</strong> / Giới hạn: <strong>10kg</strong>
          </p>
          <el-progress :percentage="75" :stroke-width="10" class="mt-1"></el-progress>
        </el-card>

        <!-- Gợi ý trang phục -->
        <el-card class="border rounded space-y-2">
          <h4 class="font-semibold text-teal-600 text-lg">
            👕 Gợi ý trang phục
          </h4>
          <p class="text-sm">Trời mưa nhẹ và lạnh vào tối, nên mang:</p>
          <ul class="list-disc pl-5 text-sm space-y-1">
            <li>Áo khoác ấm + áo mưa nhẹ</li>
            <li>Giày chống nước</li>
            <li>Quần dài giữ nhiệt</li>
          </ul>
        </el-card>
      </div>

      <DialogGroup ref="dialogGroupRef" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  mdiAccountGroupOutline,
  mdiCellphoneCharging,
  mdiEarbudsOutline,
  mdiHanger,
  mdiLotionOutline,
  mdiMinus,
  mdiSunglasses,
} from "@mdi/js";
import {
  ElCard,
  ElInput,
  ElButton,
  ElCheckbox,
  ElTabs,
  ElTabPane,
  ElProgress,
} from "element-plus";
import SvgIcon from "@jamescoyle/vue-icon";
import { useAppStore } from "~/store/appStore";
import {
  Delete,
  Notebook,
  Remove,
  Search,
  WarnTriangleFilled,
} from "@element-plus/icons-vue";
import DialogGroup from "~/components/Dialog/DialogGroup.vue";

onMounted(() => {
  console.log("appStore", appStore.bgImage);
});

const appStore = useAppStore();
const dialogGroupRef = ref(null);
const categories = [
  {
    title: "Quần áo",
    items: ["Áo khoác", "Áo thun", "Quần jeans", "Giày thể thao", "Đồ lót"],
    icon: mdiHanger,
    selectedItems: ["Áo khoác", "Giày thể thao"], // Ví dụ các mục đã chọn
  },
  {
    title: "Phụ kiện",
    items: ["Kính râm", "Đồng hồ", "Ba lô", "Túi xách"],
    icon: mdiSunglasses,
    selectedItems: ["Kính râm"],
  },
  {
    title: "Vật dụng thiết yếu",
    items: ["Hộ chiếu", "CMND/CCCD", "Tiền mặt", "Điện thoại", "Sạc dự phòng"],
    icon: mdiCellphoneCharging,
    selectedItems: [],
  },
  {
    title: "Đồ dùng vệ sinh",
    items: ["Bàn chải", "Kem đánh răng", "Sữa rửa mặt", "Khăn tắm"],
    icon: mdiLotionOutline,
    selectedItems: [],
  },
  {
    title: "Điện tử",
    items: ["Sạc laptop", "Tai nghe", "Củ sạc", "Pin dự phòng"],
    icon: mdiEarbudsOutline,
    selectedItems: [],
  },
];

const tabs = [
  "Tùy chỉnh",
  "City Break",
  "Du lịch biển",
  "Phiêu lưu",
  "Công tác",
  "Backpacking",
  "Mùa đông",
];

const forecast = [
  {
    date: "24/03",
    icon: "🌤️",
    condition: "Nắng nhẹ",
    temp: "29°C",
    wind: "10 km/h",
  },
  {
    date: "25/03",
    icon: "🌦️",
    condition: "Có mưa rào",
    temp: "26°C",
    wind: "8 km/h",
  },
  {
    date: "26/03",
    icon: "⛅",
    condition: "Trời nhiều mây",
    temp: "27°C",
    wind: "12 km/h",
  },
];

function getAddressFromCoords(lat, lon) {
  fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("📍 Địa chỉ hiện tại:", data.display_name);
    })
    .catch((error) => console.error("❌ Lỗi khi lấy địa chỉ:", error));
}


</script>

<style scoped>
/* custom styles nếu muốn thêm */
</style>
