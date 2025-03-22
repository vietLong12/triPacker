<template>
  <div class="min-h-screen bg-white flex flex-col items-center relative">
    <!-- Header -->
    <header class="w-full flex items-center justify-between px-6 py-4 shadow-sm">
      <div class="text-xl font-bold text-indigo-600">🎒 Packing List Maker</div>
    </header>

    <!-- Form -->
    <div class="w-full max-w-3xl mt-12 space-y-8 px-4">
      <h2 class="text-2xl font-bold text-gray-700">Thông tin chuyến đi</h2>

      <!-- Basic Trip Info -->
      <div class="space-y-4">
        <div>
          <label class="block text-gray-700 mb-1">Điểm đến</label>
          <input type="text" placeholder="Ví dụ: Đà Lạt, Việt Nam" class="input" />
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-700 mb-1">Ngày đi</label>
            <input type="date" class="input" />
          </div>
          <div>
            <label class="block text-gray-700 mb-1">Ngày về</label>
            <input type="date" class="input" />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-700 mb-1">Số người tham gia</label>
            <input type="number" placeholder="Ví dụ: 4" class="input" />
          </div>
          <div>
            <label class="block text-gray-700 mb-1">Ngân sách (VNĐ)</label>
            <input type="number" placeholder="Ví dụ: 10,000,000" class="input" />
          </div>
        </div>
      </div>

      <!-- Travel Type -->
      <div>
        <label class="block text-gray-700 mb-1">Loại chuyến đi</label>
        <select class="input">
          <option>Du lịch</option>
          <option>Công tác</option>
          <option>Phiêu lưu</option>
          <option>Gia đình</option>
          <option>Khác</option>
        </select>
      </div>

      <!-- Add Group Members -->
      <div>
        <label class="block text-gray-700 mb-1">Thành viên nhóm (tùy chọn)</label>
        <textarea placeholder="Nhập tên hoặc email các thành viên, cách nhau bởi dấu phẩy" class="input"></textarea>
      </div>

      <!-- Weather & Unit -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-gray-700 mb-1">Ngôn ngữ</label>
          <select class="input">
            <option>Tiếng Việt</option>
            <option>English</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700 mb-1">Đơn vị đo lường</label>
          <select class="input">
            <option>Metric (kg, km)</option>
            <option>Imperial (lbs, miles)</option>
          </select>
        </div>
      </div>

      <!-- Advanced Options -->
      <div class="space-y-4">
        <h3 class="font-semibold text-gray-700">Tùy chọn nâng cao</h3>
        <div>
          <label class="block text-gray-700 mb-1">Loại hành lý</label>
          <select class="input">
            <option>Vali lớn</option>
            <option>Ba lô du lịch</option>
            <option>Vali xách tay</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700 mb-1">Ghi chú sức khỏe / hạn chế (nếu có)</label>
          <textarea placeholder="Ví dụ: Dị ứng hải sản, đau lưng..." class="input"></textarea>
        </div>
        <div>
          <label class="block text-gray-700 mb-1">Mức độ gọn nhẹ</label>
          <select class="input">
            <option>Đóng gói đầy đủ</option>
            <option>Đóng gói tối giản</option>
          </select>
        </div>
      </div>

      <!-- Save Template & Suggestion -->
      <div class="space-y-4">
        <div class="flex items-center space-x-2">
          <input type="checkbox" />
          <label>Lưu thông tin làm template cho lần sau</label>
        </div>
        <div class="flex items-center space-x-2">
          <input type="checkbox" />
          <label>Hiển thị gợi ý checklist phù hợp sau khi tiếp tục</label>
        </div>
      </div>

      <!-- Continue -->
      <NuxtLink to="/checklist" class="btn-primary w-full mt-4">Tiếp tục</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.input {
  @apply w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400;
}
.btn-primary {
  @apply py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition block text-center;
}
</style>
