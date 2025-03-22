<template>
    <div class="min-h-screen bg-white flex flex-col items-center relative">
      <!-- Header -->
      <header class="w-full flex items-center justify-between px-6 py-4 shadow-sm">
        <div class="text-xl font-bold text-indigo-600">🎒 Packing List Maker</div>
      </header>
  
      <!-- Main -->
      <div class="w-full max-w-2xl mt-12 space-y-6 px-4">
        <h2 class="text-2xl font-bold text-gray-700">Xuất & chia sẻ danh sách</h2>
  
        <!-- Export Buttons -->
        <button class="btn-primary w-full bg-green-500 hover:bg-green-600" @click="showPreview = true">
          Xem thử PDF
        </button>
        <button class="btn-primary w-full bg-blue-500 hover:bg-blue-600">Chia sẻ liên kết</button>
        <button class="btn-primary w-full bg-purple-500 hover:bg-purple-600">Tạo mã QR</button>
        <button class="btn-primary w-full bg-yellow-500 hover:bg-yellow-600">Xuất PDF</button>
        <NuxtLink to="/checklist" class="btn-primary w-full bg-gray-300 hover:bg-gray-400 text-gray-700">Quay lại</NuxtLink>
  
        <!-- QR Code -->
        <div class="border rounded-lg p-4 bg-gray-50 text-center space-y-2">
          <div class="font-semibold text-sm text-gray-600">Mã QR cho liên kết chia sẻ:</div>
          <img src="https://api.qrserver.com/v1/create-qr-code/?data=https://yourapp.com/share/12345&size=150x150" alt="QR Code" class="mx-auto" />
          <small class="text-xs text-gray-500">Quét để mở danh sách của bạn</small>
        </div>
  
        <!-- Share History -->
        <div class="mt-6">
          <h3 class="text-lg font-semibold text-gray-700 mb-2">📄 Lịch sử chia sẻ gần đây</h3>
          <ul class="space-y-3 text-sm">
            <li class="flex justify-between items-center border p-3 rounded">
              <span>Danh sách Cao Bằng - 20/03/2025</span>
              <button class="text-indigo-600 text-xs hover:underline">Copy Link</button>
            </li>
            <li class="flex justify-between items-center border p-3 rounded">
              <span>City Break - 18/03/2025</span>
              <button class="text-indigo-600 text-xs hover:underline">Copy Link</button>
            </li>
          </ul>
        </div>
      </div>
  
      <!-- Preview PDF Modal -->
      <div v-if="showPreview" class="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
        <div class="bg-white rounded-lg p-6 w-full max-w-xl space-y-4 relative">
          <button class="absolute top-2 right-3 text-gray-600 hover:text-black" @click="showPreview = false">✖️</button>
          <h4 class="font-bold text-lg text-gray-700">Xem thử PDF</h4>
          <div class="border rounded h-64 flex items-center justify-center text-gray-400">
            <span>📄 Bản xem thử PDF sẽ hiển thị ở đây...</span>
          </div>
          <button class="btn-primary w-full bg-green-500 hover:bg-green-600" @click="showPreview = false">Đóng</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const showPreview = ref(false)
  </script>
  
  <style scoped>
  .btn-primary {
    @apply py-3 rounded-lg transition block text-center text-white;
  }
  </style>
  