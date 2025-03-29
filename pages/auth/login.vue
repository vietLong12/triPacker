<template>
    <div class="flex items-center justify-center my-32 mx-4">
        <el-card class="w-[400px] p-6 shadow-lg rounded-lg">
            <h2 class="text-2xl font-semibold text-center mb-6 text-gray-700 dark:text-gray-200">
                Đăng nhập
            </h2>

            <el-form ref="loginFormRef" :model="form" :rules="rules" @submit.prevent="handleLogin">
                <el-form-item prop="identifier">
                    <el-input v-model="form.identifier" placeholder="Tên tài khoản hoặc email" clearable>
                        <template #prefix>
                            <el-icon>
                                <User />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item prop="password">
                    <el-input v-model="form.password" type="password" placeholder="********" show-password clearable>
                        <template #prefix>
                            <el-icon>
                                <Lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item>
                    <el-checkbox v-model="form.remember">Ghi nhớ tôi</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <router-link to="/forgot-password" class="text-sm !block text-blue-500 float-right hover:underline">
                        Quên mật khẩu?
                    </router-link>
                </el-form-item>

                <el-button type="primary" class="w-full" :loading="loading" native-type="submit">
                    Đăng nhập
                </el-button>
            </el-form>

            <div class="mt-4 text-center text-gray-600 dark:text-gray-400">
                <p>Đăng nhập với tài khoản mạng xã hội</p>
                <div class="flex justify-center mt-3">
                    <el-button class="social-btn facebook">
                        <svg-icon type="mdi" :path="mdiFacebook" class="w-4 h-4 mr-2"></svg-icon> Facebook
                    </el-button>
                    <el-button class="social-btn google">
                        <svg-icon type="mdi" :path="mdiGoogle" class="w-4 h-4 mr-2"></svg-icon> Google+
                    </el-button>
                </div>
            </div>

            <div class="text-center mt-6 text-sm">
                <p>Bạn không có tài khoản?
                    <router-link to="/auth/register" class="text-red-500 hover:underline">Đăng ký ngay!</router-link>
                </p>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { User, Lock } from "@element-plus/icons-vue";
import type { FormInstance } from "element-plus";
import { mdiFacebook, mdiGoogle } from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";
import authService from "~/services/authService";
import type { LoginRequest } from "~/types/request";
import { useAuthStore } from "~/store/authStore";
const router = useRouter();
const loading = ref(false);
const loginFormRef = ref<FormInstance | null>(null);

const authStore = useAuthStore()

const form = ref<LoginRequest>({
    identifier: "",
    password: "",
    remember: false,
});

const rules = {
    identifier: [{ required: true, message: "Vui lòng nhập tên tài khoản hoặc email", trigger: "blur" }],
    password: [{ required: true, message: "Vui lòng nhập mật khẩu", trigger: "blur" }],
};

const handleLogin = async () => {
    if (!loginFormRef.value) return;

    await loginFormRef.value.validate(async (valid) => {
        loading.value = true;

        if (valid) {
            try {
                const res = await authService.login(form.value)
                console.log('res: ', res);
                if (res.status) {
                    ElMessage.success('Đăng nhập thành công!');
                    authStore.resData = res.data
                    router.push("/");
                }
            } catch (error) {
                console.log('error: ', error);
            } finally {
                loading.value = false;
            }
        }
    });
};
</script>

<style scoped>
.social-btn {
    width: 120px;
    color: white;
    border-radius: 4px;
}

.twitter {
    background-color: #1da1f2;
}

.facebook {
    background-color: #1877f2;
}

.google {
    background-color: #db4437;
}

.register-btn {
    background-color: #00c09d;
    color: white;
}
</style>