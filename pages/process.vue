<template>
    <div class="flex flex-col items-center justify-center h-screen px-6 text-center">
        <el-card class="max-w-md p-6 shadow-lg rounded-lg">
            <el-icon class="text-green-500 text-5xl mb-4">
                <SuccessFilled />
            </el-icon>
            <h2 class="text-2xl font-semibold text-gray-700 mb-2">Xác nhận email</h2>
            <p class="text-gray-600">
                Chúng tôi đã gửi một email xác nhận đến <strong>{{ email }}</strong>.
                Vui lòng kiểm tra hộp thư của bạn và nhấn vào liên kết để kích hoạt tài khoản.
            </p>

            <p class="text-sm text-gray-500 mt-4">Nếu không thấy email, vui lòng kiểm tra thư mục Spam.</p>

            <div class="mt-6">
                <el-button type="primary" @click="goToGmail" class="w-full">
                    Kiểm tra Gmail
                </el-button>
                <p class="text-gray-500 text-sm mt-3">Tự động chuyển sau {{ countdown }} giây...</p>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { SuccessFilled } from "@element-plus/icons-vue";

const router = useRouter();
const email = history.state.email || "Không có email";
const countdown = ref(10);

const goToGmail = () => {
    window.open("https://mail.google.com", "_blank");
};

onMounted(() => {
    const timer = setInterval(() => {
        if (countdown.value > 0) {
            countdown.value--;
        } else {
            clearInterval(timer);
            router.push("/login"); // Chuyển về trang đăng nhập sau 10s
        }
    }, 1000);
});
</script>

<style scoped></style>
