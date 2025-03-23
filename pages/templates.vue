<template>
    <div class="min-h-screen bg-gray-50 py-10 px-4">
      <!-- Header -->
      <header class="max-w-7xl mx-auto mb-8 flex justify-between items-center">
        <div>
          <h1 class="text-3xl font-bold text-indigo-600 mb-1">🎒 Community Templates</h1>
          <p class="text-gray-600">Khám phá & lưu các checklist hữu ích từ cộng đồng!</p>
        </div>
        <!-- Sort -->
        <div>
          <select class="input-sort" v-model="sortOption">
            <option value="new">Mới nhất</option>
            <option value="popular">Phổ biến</option>
            <option value="saved">Lưu nhiều nhất</option>
          </select>
        </div>
      </header>
  
      <!-- Filters -->
      <div class="max-w-7xl mx-auto mb-6 flex gap-4 flex-wrap">
        <button
          v-for="type in types"
          :key="type"
          @click="selectedType = type"
          :class="['filter-btn', selectedType === type ? 'bg-indigo-600 text-white' : '']"
        >
          {{ type }}
        </button>
      </div>
  
      <!-- Grid -->
      <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in filteredChecklists"
          :key="item.id"
          class="bg-white rounded-xl shadow hover:shadow-lg p-5 transition relative group"
        >
          <!-- Save count -->
          <div class="absolute top-3 right-3 bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded-lg shadow-sm flex items-center gap-1">
            💾 {{ item.saves }}
          </div>
          <!-- Title & Type -->
          <div class="flex items-center justify-between mb-3">
            <h2 class="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition">{{ item.title }}</h2>
            <span class="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded">{{ item.type }}</span>
          </div>
          <!-- Description -->
          <p class="text-gray-600 text-sm line-clamp-2 mb-3">{{ item.description }}</p>
          <!-- Author -->
          <div class="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <img :src="item.avatar" alt="avatar" class="w-6 h-6 rounded-full object-cover" />
            <span>{{ item.author }}</span> • <span>{{ item.date }}</span>
          </div>
          <!-- Actions -->
          <div class="flex space-x-2">
            <NuxtLink :to="`/community/${item.id}`" class="btn-outline flex-1">Xem</NuxtLink>
            <button class="btn-primary flex-1">Lưu</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const types = ['Tất cả', 'Du lịch', 'Công tác', 'Phiêu lưu', 'Backpacking', 'Mùa đông']
  
  const selectedType = ref('Tất cả')
  const sortOption = ref('new')
  
  const checklists = ref([
    {
      id: 1,
      title: 'Checklist Đà Lạt 3N2Đ',
      description: 'Đóng gói cho chuyến đi Đà Lạt lạnh, có đầy đủ đồ giữ ấm và phụ kiện.',
      author: 'Nguyễn Văn A',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      type: 'Du lịch',
      date: '20/03/2025',
      saves: 120
    },
    {
      id: 2,
      title: 'Checklist công tác Sài Gòn',
      description: 'Chuyến công tác 2 ngày, chuẩn bị tối giản, có cả thiết bị điện tử.',
      author: 'Trần Thị B',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
      type: 'Công tác',
      date: '18/03/2025',
      saves: 85
    },
    {
      id: 3,
      title: 'Checklist biển Phú Quốc',
      description: 'Chuẩn bị cho chuyến đi biển, nhẹ nhàng, thoải mái, phù hợp hè.',
      author: 'Lê Minh C',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
      type: 'Du lịch',
      date: '15/03/2025',
      saves: 70
    }
  ])
  
  const filteredChecklists = computed(() => {
    let list = [...checklists.value]
    if (selectedType.value !== 'Tất cả') {
      list = list.filter(c => c.type === selectedType.value)
    }
    if (sortOption.value === 'popular') {
      list.sort((a, b) => b.saves - a.saves)
    } else if (sortOption.value === 'new') {
      list.sort((a, b) => new Date(b.date) - new Date(a.date))
    }
    return list
  })
  </script>
  
  <style scoped>
  .btn-primary {
    @apply py-2 text-center bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition;
  }
  .btn-outline {
    @apply py-2 text-center border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition;
  }
  .input-sort {
    @apply px-3 py-2 rounded-lg border text-sm text-gray-700 border-gray-300 focus:outline-none;
  }
  .filter-btn {
    @apply px-3 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-indigo-50 transition text-sm;
  }
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>
  