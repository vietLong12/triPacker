<template>
    <div class="min-h-screen bg-white p-6 space-y-8">
      <h1 class="text-2xl font-bold text-indigo-600">👥 Chia sẻ trách nhiệm nhóm</h1>
  
      <!-- Group Members -->
      <div class="space-y-4">
        <div v-for="(member, idx) in members" :key="idx" class="border p-4 rounded shadow flex justify-between items-center">
          <div>
            <h3 class="font-semibold">{{ member.name }}</h3>
            <p class="text-sm text-gray-600">Phụ trách: {{ member.task }}</p>
          </div>
          <button class="px-3 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-600" @click="remove(idx)">Xóa</button>
        </div>
        <button class="px-3 py-1 text-xs rounded bg-green-500 text-white hover:bg-green-600" @click="add">➕ Thêm thành viên</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const members = ref([
    { name: "Minh", task: "Đồ ăn & nước uống" },
    { name: "Lan", task: "Vật dụng y tế & sơ cứu" },
  ]);
  
  const add = () => {
    members.value.push({ name: "Thành viên mới", task: "Chưa phân công" });
  };
  const remove = (idx: number) => {
    members.value.splice(idx, 1);
  };
  </script>
  