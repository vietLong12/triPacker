<template>
  <div class="min-h-screen bg-white p-6 space-y-8">
    <h1 class="text-3xl font-bold text-indigo-600">🗓️ Lịch trình chuyến đi</h1>

    <!-- Travel Summary -->
    <!-- Travel Summary Improved -->
    <!-- Travel Summary Full -->
    <div class="border rounded-xl p-6 shadow-md bg-gradient-to-br from-indigo-50 to-white space-y-6">
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="bg-indigo-500 text-white rounded-full p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M17 20h5v-2a3 3 0 00-3-3h-4a3 3 0 00-3 3v2h5zM9 20H4v-2a3 3 0 013-3h4a3 3 0 013 3v2H9zM16 3.13a4 4 0 11-8 0 4 4 0 018 0zM20 8v6m0 0a4 4 0 01-4 4H8a4 4 0 01-4-4V8">
              </path>
            </svg>
          </div>
          <div>
            <h2 class="text-lg font-bold text-gray-800">Thông tin chuyến đi</h2>
            <p class="text-sm text-gray-500">
              Quản lý bởi:
              <span class="font-medium text-indigo-600">Nguyễn Văn A</span>
            </p>
          </div>
        </div>
        <button class="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 text-sm">
          Sửa
        </button>
      </div>

      <!-- Trip Info -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <p class="text-gray-600">🌍 Điểm đến:</p>
          <p class="font-medium text-gray-800">Cao Bằng, Việt Nam</p>
        </div>
        <div>
          <p class="text-gray-600">🗓️ Thời gian:</p>
          <p class="font-medium text-gray-800">24/03 - 26/03 (3 ngày)</p>
        </div>
        <div>
          <p class="text-gray-600">👥 Số người:</p>
          <p class="font-medium text-gray-800">3 thành viên</p>
        </div>
        <div>
          <p class="text-gray-600">💼 Loại chuyến đi:</p>
          <p class="font-medium text-gray-800">Du lịch</p>
        </div>
        <div>
          <p class="text-gray-600">💰 Tổng chi phí dự kiến:</p>
          <p class="text-emerald-600 font-bold">{{ totalCost }} VNĐ</p>
        </div>
      </div>

      <!-- Member Cost Breakdown -->
      <div class="space-y-2">
        <h3 class="font-semibold text-gray-700 flex items-center gap-2">
          👤 Chi phí từng thành viên:
        </h3>
        <div class="space-y-1">
          <div v-for="member in members" :key="member.name" class="flex justify-between text-sm">
            <span class="text-gray-700">{{ member.name }}</span>
            <span class="text-indigo-600 font-medium">{{ member.cost.toLocaleString() }} VNĐ</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Add Activity Form -->
      <div class="md:col-span-1 space-y-4 border rounded-lg p-4 shadow-sm bg-gradient-to-b from-indigo-50 to-white">
        <h2 class="font-semibold text-lg text-gray-700 flex items-center gap-2">
          ➕ Thêm hoạt động
        </h2>
        <div class="space-y-3">
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Ngày</label>
            <input type="date" class="input" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Tên hoạt động</label>
            <input type="text" placeholder="Ví dụ: Tham quan bảo tàng" class="input" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Thời gian</label>
            <input type="time" class="input" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Loại hoạt động</label>
            <select class="input">
              <option value="explore">🗺️ Tham quan</option>
              <option value="food">🍽️ Ăn uống</option>
              <option value="rest">🏨 Nghỉ ngơi</option>
              <option value="move">✈️ Di chuyển</option>
              <option value="shopping">🛍️ Mua sắm</option>
              <option value="relax">🧘‍♂️ Thư giãn</option>
              <option value="entertainment">🏖️ Giải trí</option>
              <option value="event">🎉 Sự kiện</option>
              <option value="sport">🏃‍♂️ Thể thao</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Chi phí (VNĐ)</label>
            <input type="number" placeholder="Ví dụ: 300000" class="input" />
          </div>
          <button class="btn-primary w-full">➕ Thêm vào lịch</button>
        </div>
      </div>

      <!-- Itinerary -->
      <div class="md:col-span-2 space-y-6">
        <h2 class="font-semibold text-lg text-gray-700 flex items-center gap-2">
          📅 Lịch trình đã thêm
        </h2>

        <div v-for="day in itinerary" :key="day.date" class="space-y-3">
          <div class="flex items-center justify-between">
            <h3 class="text-indigo-600 font-semibold">
              {{ day.date }} - {{ day.day }}
            </h3>
            <span class="text-sm text-gray-600">Tổng chi phí: {{ calculateDayTotal(day.activities) }} VNĐ</span>
          </div>

          <div class="space-y-2">
            <div v-for="activity in day.activities" :key="activity.name" :class="[
              'flex items-center justify-between rounded-lg p-3 shadow-sm',
              activity.bg,
            ]">
              <div class="flex items-center gap-3">
                <span class="text-xl">{{ activity.icon }}</span>
                <div>
                  <div class="font-medium text-gray-700">
                    {{ activity.name }}
                  </div>
                  <div class="text-xs text-gray-600">
                    {{ activity.time }} • {{ activity.type }} •
                    {{ activity.cost }} VNĐ
                  </div>
                </div>
              </div>
              <div class="flex gap-2">
                <button class="text-sm px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500">
                  Sửa
                </button>
                <button class="text-sm px-2 py-1 bg-rose-500 text-white rounded hover:bg-rose-600">
                  Xóa
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Tổng chi phí toàn bộ lịch trình -->
        <div class="text-right text-indigo-700 font-semibold">
          🧾 Tổng chi phí toàn bộ lịch trình: {{ totalCost }} VNĐ
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const members = [
  { name: "Nguyễn Văn A", cost: 2000000 },
  { name: "Trần Thị B", cost: 2000000 },
  { name: "Lê Văn C", cost: 2000000 },
];
const itinerary = [
  {
    date: "24/03",
    day: "Thứ 2",
    activities: [
      {
        name: "Check-in khách sạn",
        time: "14:00",
        type: "Nghỉ ngơi",
        cost: 0,
        icon: "🏨",
        bg: "bg-blue-50",
      },
      {
        name: "Đi dạo bãi biển",
        time: "16:00",
        type: "Giải trí",
        cost: 0,
        icon: "🏖️",
        bg: "bg-teal-50",
      },
      {
        name: "Ăn tối tại nhà hàng",
        time: "19:00",
        type: "Ăn uống",
        cost: 350000,
        icon: "🍽️",
        bg: "bg-yellow-50",
      },
    ],
  },
  {
    date: "25/03",
    day: "Thứ 3",
    activities: [
      {
        name: "Workshop pha cà phê",
        time: "10:00",
        type: "Sự kiện",
        cost: 200000,
        icon: "🎉",
        bg: "bg-purple-50",
      },
      {
        name: "Mua sắm tại TTTM",
        time: "14:00",
        type: "Mua sắm",
        cost: 1000000,
        icon: "🛍️",
        bg: "bg-pink-50",
      },
      {
        name: "Yoga thư giãn",
        time: "17:00",
        type: "Thư giãn",
        cost: 100000,
        icon: "🧘‍♂️",
        bg: "bg-green-50",
      },
    ],
  },
];

const calculateDayTotal = (activities: any[]) => {
  return activities.reduce((sum, act) => sum + act.cost, 0);
};

const totalCost = itinerary.reduce(
  (sum, day) => sum + calculateDayTotal(day.activities),
  0
);

definePageMeta({
  middleware: 'auth',
});

</script>

<style scoped>
.input {
  @apply w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400;
}

.btn-primary {
  @apply py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition block text-center;
}
</style>
