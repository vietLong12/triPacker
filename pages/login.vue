<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");
const loading = ref(false);

const login = () => {
    if (!username.value || !password.value) {
        return ElMessage.error("Vui lòng nhập đầy đủ thông tin!");
    }

    loading.value = true;

    setTimeout(() => {
        loading.value = false;
        ElMessage.success("Đăng nhập thành công!");
        router.push("/dashboard"); // Điều hướng sau khi đăng nhập
    }, 1500);
};
</script>

<template>
    <div class="flex items-center justify-center h-screen">
        <el-card class="w-96 p-5 shadow-md">
            <h2 class="text-2xl font-semibold text-center mb-4">Đăng Nhập</h2>

            <el-form @submit.prevent="login">
                <el-form-item label="Tên đăng nhập">
                    <el-input v-model="username" placeholder="Nhập username" clearable />
                </el-form-item>

                <el-form-item label="Mật khẩu">
                    <el-input v-model="password" type="password" placeholder="Nhập mật khẩu" clearable show-password />
                </el-form-item>

                <el-button type="primary" class="w-full" :loading="loading" @click="login">
                    Đăng Nhập
                </el-button>
            </el-form>
        </el-card>
    </div>
</template>
