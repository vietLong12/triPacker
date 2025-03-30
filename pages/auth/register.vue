<template>
    <div class="flex items-center justify-center my-32 mx-4">
        <el-card class="w-[400px] p-6 shadow-lg rounded-lg">
            <h2 class="text-2xl font-semibold text-center mb-6 text-gray-700 dark:text-gray-200">
                Đăng ký tài khoản
            </h2>

            <el-form ref="registerFormRef" :model="form" :rules="rules" @submit.prevent="handleRegister">
                <el-form-item prop="fullName">
                    <el-input v-model="form.name" placeholder="Tên người dùng" clearable>
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

                <el-form-item prop="terms">
                    <el-checkbox v-model="form.terms">
                        Tôi đồng ý với <router-link to="/terms" class="text-blue-500 hover:underline">điều khoản sử
                            dụng</router-link>
                    </el-checkbox>
                </el-form-item>

                <el-button type="primary" class="w-full mt-2" :loading="loading" native-type="submit">
                    Đăng ký
                </el-button>
            </el-form>



            <div class="text-center mt-6 text-sm">
                <p>Đã có tài khoản?
                    <router-link to="/auth/login" class="text-red-500 hover:underline">Đăng nhập ngay!</router-link>
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
import type { RegisterRequest } from "~/types/request";

const router = useRouter();
const loading = ref(false);
const { t } = useI18n()
const registerFormRef = ref<FormInstance | null>(null);

const form = ref<RegisterRequest>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
});

const rules = {
    name: [
        { required: true, message: "Vui lòng nhập tên người dùng", trigger: "blur" },
        {
            validator: (rule: any, value: string, callback: Function) => {
                if (!/^[a-zA-Z][a-zA-Z0-9._]{2,19}$/.test(value)) {
                    callback(
                        new Error("Tên người dùng phải bắt đầu bằng chữ cái, từ 3-20 ký tự, chỉ chứa chữ, số, _ hoặc .")
                    );
                } else if (/[_\.]{2,}/.test(value)) {
                    callback(new Error("Tên người dùng không được chứa dấu _ hoặc . liên tiếp"));
                } else if (/[_.]$/.test(value)) {
                    callback(new Error("Tên người dùng không được kết thúc bằng _ hoặc ."));
                } else {
                    callback();
                }
            },
            trigger: "blur"
        }
    ], email: [{ required: true, type: "email", message: "Vui lòng nhập email hợp lệ", trigger: "blur" }],
    password: [{ required: true, message: "Vui lòng nhập mật khẩu", trigger: "blur" }],
    confirmPassword: [
        { required: true, message: "Vui lòng nhập lại mật khẩu", trigger: "blur" },
        {
            validator: (rule: any, value: string, callback: Function) => {
                if (value.length < 6 || value.length > 15) {
                    callback(new Error("Mật khẩu phải từ 6 đến 15 ký tự"));
                }
                if (value !== form.value.password) {
                    callback(new Error("Mật khẩu không khớp"));
                } else {
                    callback();
                }
            }, trigger: "blur"
        }
    ],
    terms: [{
        validator: (_, value) => {
            return value ? Promise.resolve() : Promise.reject("Bạn phải đồng ý với điều khoản");
        },
        trigger: "change"
    }],
};

const handleRegister = async () => {
    if (!registerFormRef.value) return;

    await registerFormRef.value.validate(async (valid: any) => {
        if (valid) {
            loading.value = true;
            try {
                const res = await authService.register(form.value)
                if (res.status) {
                    const code = res.message;
                    ElMessage.success(t(`errors.auth.${code}`));
                    router.push({ path: "/auth/process", state: { email: form.value.email } });
                } else {
                    ElMessage.error(res.message);
                }
            } catch (error: any) {
                const errorCode = error.response?.data?.message || 'default';
                console.log('errorCode: ', errorCode);
                ElMessage.error(t(`errors.auth.${errorCode}`));
            }
            finally {
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

.facebook {
    background-color: #1877f2;
}

.google {
    background-color: #db4437;
}
</style>
