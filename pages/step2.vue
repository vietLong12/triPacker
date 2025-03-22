<template>
    <div class="min-h-screen bg-white p-6 space-y-8">
      <!-- Header -->
      <header class="w-full flex items-center justify-between pb-4 border-b">
        <div class="text-2xl font-bold text-indigo-600">
          🎒 Packing List Maker
        </div>
      </header>
  
      <!-- Trip Info -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex gap-4 items-center">
          <span class="font-semibold text-gray-600">Mẫu: City Break</span>
          <span class="text-sm text-gray-500">Đã đóng gói: 0%</span>
        </div>
        <div class="flex gap-4 text-sm text-gray-600">
          <div>Ngày đi: 24/03/2025</div>
          <div>Ngày về: 27/03/2025</div>
          <div>Còn: 2 ngày</div>
        </div>
      </div>
  
      <!-- Checklist -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div
          v-for="(category, idx) in categories"
          :key="idx"
          class="border rounded-lg p-3 space-y-3"
        >
          <div :class="['font-bold uppercase', category.color]">
            {{ category.title }}
          </div>
          <textarea
            placeholder="Ghi chú"
            class="w-full p-1 border rounded text-sm"
          ></textarea>
          <div
            v-for="item in category.items"
            :key="item"
            class="flex items-center justify-between text-sm"
          >
            <span>{{ item }}</span>
            <input type="checkbox" />
          </div>
        </div>
      </div>
  
      <!-- Tabs -->
      <div class="flex justify-center space-x-4 pt-6 border-t">
        <button
          v-for="tab in tabs"
          :key="tab"
          class="text-xs px-3 py-1 border rounded hover:bg-indigo-100 transition"
        >
          {{ tab }}
        </button>
      </div>
  
      <!-- Current Weather -->
      <div
        class="mt-8 border rounded-lg p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 space-y-4"
      >
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex items-center gap-3">
            <div class="text-3xl">🌤️</div>
            <div>
              <div class="text-lg font-semibold">Hà Nội, Việt Nam</div>
              <div class="text-sm text-gray-600">Trời nắng nhẹ</div>
            </div>
          </div>
          <div class="flex gap-6 text-sm text-gray-700">
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
          <h3 class="text-sm font-semibold text-indigo-700 mb-2">
            ⛅ Dự báo thời tiết tại Cao Bằng (3 ngày tới)
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              v-for="(day, idx) in forecast"
              :key="idx"
              class="border rounded p-3 bg-white shadow-sm space-y-2"
            >
              <div class="flex justify-between items-center">
                <span class="font-semibold">{{ day.date }}</span>
                <span class="text-lg">{{ day.icon }}</span>
              </div>
              <div class="text-sm text-gray-600">{{ day.condition }}</div>
              <div class="flex justify-between text-xs text-gray-700">
                <span>Nhiệt độ: {{ day.temp }}</span>
                <span>Gió: {{ day.wind }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Important Notes -->
      <div
        class="mt-8 border-l-4 border-rose-400 bg-rose-50 p-4 rounded-lg space-y-3"
      >
        <h3 class="font-semibold text-rose-700 text-lg">⚠️ Lưu ý quan trọng</h3>
        <ul class="list-disc pl-5 space-y-1 text-sm text-gray-700">
          <li>
            Thời tiết tại Cao Bằng dự báo có mưa, hãy chuẩn bị áo mưa và giày
            chống nước.
          </li>
          <li>
            Bạn chưa tick: <strong>Passport, Thuốc cá nhân</strong> trong checklist.
          </li>
          <li>
            Chuẩn bị sạc dự phòng, đề phòng mất điện khi di chuyển đường dài.
          </li>
          <li>
            Điều chỉnh hành lý phù hợp vì Cao Bằng có thể lạnh vào buổi tối (21°C).
          </li>
        </ul>
      </div>
  
      <!-- Additional Utilities -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <!-- Trọng lượng hành lý -->
        <div class="border rounded p-4 bg-pink-50 space-y-2">
          <h4 class="font-semibold text-pink-600 text-lg">⚖️ Trọng lượng hành lý</h4>
          <p class="text-sm text-gray-700">
            Hiện tại: <strong>7.5kg</strong> / Giới hạn: <strong>10kg</strong>
          </p>
          <div class="w-full bg-gray-300 rounded-full h-2.5 mt-1">
            <div class="bg-pink-500 h-2.5 rounded-full" style="width: 75%"></div>
          </div>
        </div>
  
        <!-- Gợi ý trang phục -->
        <div class="border rounded p-4 bg-teal-50 space-y-2">
          <h4 class="font-semibold text-teal-600 text-lg">👕 Gợi ý trang phục</h4>
          <p class="text-sm text-gray-700">
            Trời mưa nhẹ và lạnh vào tối, nên mang:
          </p>
          <ul class="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Áo khoác ấm + áo mưa nhẹ</li>
            <li>Giày chống nước</li>
            <li>Quần dài giữ nhiệt</li>
          </ul>
        </div>
  
        <!-- Mẹo đóng gói -->
        <div class="border rounded p-4 bg-indigo-50 space-y-2">
          <h4 class="font-semibold text-indigo-600 text-lg">💡 Mẹo đóng gói</h4>
          <ul class="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Cuộn quần áo thay vì gấp để tiết kiệm diện tích.</li>
            <li>Dùng túi nén khí cho đồ mùa đông.</li>
            <li>Để vật dụng quan trọng ở ngăn ngoài balo.</li>
          </ul>
        </div>
  
        <!-- Nhóm đi cùng -->
        <div class="border rounded p-4 bg-orange-50 space-y-2">
          <h4 class="font-semibold text-orange-600 text-lg">👨‍👩‍👧‍👦 Nhóm đi cùng</h4>
          <p class="text-sm text-gray-700">Đi cùng: Nam, Linh, Duy</p>
          <p class="text-sm text-gray-700">Phân chia vật dụng:</p>
          <ul class="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Nam: Dụng cụ y tế & thuốc</li>
            <li>Linh: Đồ ăn nhẹ & nước uống</li>
            <li>Duy: Thiết bị điện tử & sạc</li>
          </ul>
        </div>
      </div>

      <div
  class="mt-8 border-l-4 border-indigo-400 bg-indigo-50 p-4 rounded-lg space-y-3"
>
  <h3 class="font-semibold text-indigo-700 text-lg">📝 Ghi chú nhanh</h3>
  <textarea
    placeholder="Nhập ghi chú nhanh cho chuyến đi của bạn..."
    class="w-full p-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
    rows="3"
  ></textarea>
  <div class="flex justify-end">
    <button
      class="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition text-sm"
    >
      Lưu ghi chú
    </button>
  </div>
</div>
    </div>
  </template>
  
  <script setup lang="ts">
  const categories = [
    {
      title: "Quần áo",
      color: "text-pink-500",
      items: ["Áo khoác", "Áo thun", "Quần jeans", "Giày thể thao", "Đồ lót"],
    },
    {
      title: "Phụ kiện",
      color: "text-red-400",
      items: ["Kính râm", "Đồng hồ", "Ba lô", "Túi xách"],
    },
    {
      title: "Vật dụng thiết yếu",
      color: "text-orange-400",
      items: ["Hộ chiếu", "CMND/CCCD", "Tiền mặt", "Điện thoại", "Sạc dự phòng"],
    },
    {
      title: "Đồ dùng vệ sinh",
      color: "text-yellow-500",
      items: ["Bàn chải", "Kem đánh răng", "Sữa rửa mặt", "Khăn tắm"],
    },
    {
      title: "Điện tử",
      color: "text-green-500",
      items: ["Sạc laptop", "Tai nghe", "Củ sạc", "Pin dự phòng"],
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
  </script>
  
  <style scoped>
  /* custom styles nếu muốn thêm */
  </style>
  