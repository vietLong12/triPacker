<template>
    <div class="flex items-center justify-center my-32 mx-4">
        <el-card class="w-[400px] p-6 shadow-lg rounded-lg">
            <h2 class="text-2xl font-semibold text-center mb-6 text-gray-700 dark:text-gray-200">
                Đăng ký tài khoản
            </h2>

            <el-form ref="registerFormRef" :model="form" :rules="rules" @submit.prevent="handleRegister">
                <el-form-item prop="fullName">
                    <el-input v-model="form.fullName" placeholder="Họ và tên" clearable>
                        <template #prefix>
                            <el-icon>
                                <User />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item prop="email">
                    <el-input v-model="form.email" placeholder="Email" clearable>
                        <template #prefix>
                            <el-icon>
                                <User />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item prop="password">
                    <el-input v-model="form.password" type="password" placeholder="Mật khẩu" show-password clearable>
                        <template #prefix>
                            <el-icon>
                                <Lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item prop="confirmPassword">
                    <el-input v-model="form.confirmPassword" type="password" placeholder="Nhập lại mật khẩu"
                        show-password clearable>
                        <template #prefix>
                            <el-icon>
                                <Lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item>
                    <el-checkbox v-model="form.terms">
                        Tôi đồng ý với <router-link to="/terms" class="text-blue-500 hover:underline">điều khoản sử
                            dụng</router-link>
                    </el-checkbox>
                </el-form-item>

                <el-button type="primary" class="w-full" :loading="loading" native-type="submit">
                    Đăng ký
                </el-button>
            </el-form>



            <div class="text-center mt-6 text-sm">
                <p>Đã có tài khoản?
                    <router-link to="/login" class="text-red-500 hover:underline">Đăng nhập ngay!</router-link>
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

const router = useRouter();
const loading = ref(false);
const registerFormRef = ref<FormInstance | null>(null);

const form = ref({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
});

const rules = {
    fullName: [{ required: true, message: "Vui lòng nhập họ và tên", trigger: "blur" }],
    email: [{ required: true, type: "email", message: "Vui lòng nhập email hợp lệ", trigger: "blur" }],
    password: [{ required: true, message: "Vui lòng nhập mật khẩu", trigger: "blur" }],
    confirmPassword: [
        { required: true, message: "Vui lòng nhập lại mật khẩu", trigger: "blur" },
        {
            validator: (rule: any, value: string, callback: Function) => {
                if (value !== form.value.password) {
                    callback(new Error("Mật khẩu không khớp"));
                } else {
                    callback();
                }
            }, trigger: "blur"
        }
    ],
    terms: [{
        required: true, validator: (_, value, callback) => {
            if (!value) callback(new Error("Bạn phải đồng ý với điều khoản"));
            else callback();
        }, trigger: "change"
    }],
};

const handleRegister = () => {
    if (!registerFormRef.value) return;

    registerFormRef.value.validate((valid) => {
        if (valid) {
            loading.value = true;
            setTimeout(() => {
                loading.value = false;
                ElMessage.success("Đăng ký thành công!");
                console.log(form.value);
                router.push({ path: "/process", state: { email: form.value.email } });
            }, 1500);
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

.facebook {
    background-color: #1877f2;
}

.google {
    background-color: #db4437;
}
</style>
