<template>
    <div class="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Cài đặt</h2>

        <el-row :gutter="20">
            <!-- Chế độ sáng/tối -->
            <el-col :span="16">
                <span class="text-gray-700 dark:text-gray-300">Chế độ tối</span>
            </el-col>
            <el-col :span="8" class="flex justify-end">
                <el-switch v-model="settingsStore.darkMode" @change="toggleDarkMode" />
            </el-col>
        </el-row>

        <el-row :gutter="20" class="mt-4">
            <!-- Ngôn ngữ -->
            <el-col :span="16">
                <span class="text-gray-700 dark:text-gray-300">Ngôn ngữ</span>
            </el-col>
            <el-col :span="8" class="flex justify-end">
                <el-select v-model="settingsStore.language" class="w-32">
                    <el-option label="Tiếng Việt" value="vi" />
                    <el-option label="English" value="en" />
                </el-select>
            </el-col>
        </el-row>

        <el-row :gutter="20" class="mt-4">
            <!-- Đơn vị đo lường -->
            <el-col :span="16">
                <span class="text-gray-700 dark:text-gray-300">Đơn vị đo lường</span>
            </el-col>
            <el-col :span="8" class="flex justify-end">
                <el-select v-model="settingsStore.unit" class="w-32">
                    <el-option label="Kg" value="kg" />
                    <el-option label="Lbs" value="lbs" />
                </el-select>
            </el-col>
        </el-row>

        <el-row :gutter="20" class="mt-4">
            <!-- Âm thanh thông báo -->
            <el-col :span="16">
                <span class="text-gray-700 dark:text-gray-300">Âm thanh thông báo</span>
            </el-col>
            <el-col :span="8" class="flex justify-end">
                <el-switch v-model="settingsStore.sound" />
            </el-col>
        </el-row>

        <el-row :gutter="20" class="mt-4">
            <!-- Tự động lưu danh sách -->
            <el-col :span="16">
                <span class="text-gray-700 dark:text-gray-300">Tự động lưu danh sách</span>
            </el-col>
            <el-col :span="8" class="flex justify-end">
                <el-switch v-model="settingsStore.autoSave" />
            </el-col>
        </el-row>

        <el-row :gutter="20" class="mt-4">
            <!-- Định dạng ngày tháng -->
            <el-col :span="16">
                <span class="text-gray-700 dark:text-gray-300">Định dạng ngày tháng</span>
            </el-col>
            <el-col :span="8" class="flex justify-end">
                <el-select v-model="settingsStore.dateFormat" class="w-32">
                    <el-option label="DD/MM/YYYY" value="ddmmyyyy" />
                    <el-option label="MM/DD/YYYY" value="mmddyyyy" />
                </el-select>
            </el-col>
        </el-row>

        <el-row :gutter="20" class="mt-4">
            <!-- Chia sẻ danh sách công khai -->
            <el-col :span="16">
                <span class="text-gray-700 dark:text-gray-300">Chia sẻ danh sách công khai</span>
            </el-col>
            <el-col :span="8" class="flex justify-end">
                <el-switch v-model="settingsStore.publicShare" />
            </el-col>
        </el-row>

        <el-row class="mt-6">
            <!-- Nút Đặt lại cài đặt -->
            <el-button type="danger" plain class="w-full" @click="resetSettings">Đặt lại cài đặt</el-button>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { useSettingsStore } from '~/store/settingsStore';
import { watch } from 'vue';

const settingsStore = useSettingsStore();

const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark', settingsStore.darkMode);
};

const resetSettings = () => {
    settingsStore.$reset();
    localStorage.removeItem('settings');
};

// Theo dõi thay đổi và lưu vào localStorage
watch(settingsStore, (newSettings) => {
    localStorage.setItem('settings', JSON.stringify(newSettings));
}, { deep: true });
</script>

<style scoped></style>