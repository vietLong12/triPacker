<template>
    <div class="max-w-5xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <div class="grid grid-cols-2 gap-6">
        <!-- Cột trái: Thông tin cá nhân -->
        <div>
          <div class="flex flex-col items-center">
            <el-avatar :size="120" :src="user.avatar" class="mb-4" />
            <h2 class="text-xl font-bold text-gray-800 dark:text-white">{{ user.fullname }}</h2>
            <p class="text-gray-500">@{{ user.name }}</p>
          </div>
  
          <div class="mt-6 space-y-4">
            <el-form label-position="top" v-if="isEditing">
              <el-form-item label="Full Name"><el-input v-model="user.fullname" /></el-form-item>
              <el-form-item label="Email"><el-input v-model="user.email" /></el-form-item>
              <el-form-item label="About Me"><el-input type="textarea" v-model="user.about_me" maxlength="120" show-word-limit /></el-form-item>
              <el-form-item label="Social Links">
                <el-input v-for="(link, index) in user.social_network" :key="index" v-model="user.social_network[index]" placeholder="Enter link" />
              </el-form-item>
              <el-form-item label="Gender">
                <el-select v-model="user.gender">
                  <el-option label="Male" value="male" />
                  <el-option label="Female" value="female" />
                </el-select>
              </el-form-item>
              <el-form-item label="Birthday">
                <el-date-picker v-model="user.birthday" type="date" placeholder="Pick a date" />
              </el-form-item>
            </el-form>
  
            <div v-else>
              <p><strong>Email:</strong> {{ user.email }}</p>
              <p><strong>About Me:</strong> {{ user.about_me }}</p>
              <p><strong>Social Links:</strong></p>
              <ul>
                <li v-for="(link, index) in user.social_network" :key="index">
                  <a :href="link" target="_blank" class="text-blue-500">{{ link }}</a>
                </li>
              </ul>
              <p><strong>Gender:</strong> {{ user.gender }}</p>
              <p><strong>Birthday:</strong> {{ user.birthday }}</p>
            </div>
          </div>
  
          <div class="mt-6 flex justify-center">
            <el-button type="primary" @click="toggleEdit">{{ isEditing ? 'Save' : 'Edit Profile' }}</el-button>
          </div>
        </div>
  
        <!-- Cột phải: Repository -->
        <div>
          <h3 class="text-lg font-bold mb-4">Repositories</h3>
          <el-card v-for="repo in user.repositories" :key="repo.id" class="mb-3">
            <div class="flex justify-between items-center">
              <h4 class="font-semibold">{{ repo.name }}</h4>
              <el-tag>{{ repo.language }}</el-tag>
            </div>
            <p class="text-sm text-gray-500">{{ repo.description }}</p>
          </el-card>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const isEditing = ref(false);
  const user = ref({
    name: "vietLong12",
    fullname: "Nguyễn Việt Long",
    email: "vietlongn358@gmail.com",
    avatar: "https://via.placeholder.com/120", // Update thành link avatar thật
    about_me: "Front-End Developer | VueJS | ReactJS",
    social_network: ["https://fb.com/cao.teehee", "https://s.net.vn/dtIE"],
    gender: "male",
    birthday: "1998-05-12",
    repositories: [
      { id: 1, name: "COFFEE_WEB", description: "Coffee ordering system", language: "TypeScript" },
      { id: 2, name: "COFFEE_WEB_API", description: "API for coffee web", language: "JavaScript" },
      { id: 3, name: "todoList_01", description: "Todo list with React", language: "TypeScript" },
    ],
  });
  
  const toggleEdit = () => {
    isEditing.value = !isEditing.value;
  };
  </script>
  
  <style scoped>
  .el-avatar {
    border: 3px solid white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  </style>
  