<template>
    <el-result title="Tạo tài khoản thất bại" sub-title="Hãy thử lại" class="dark:bg-transparent bg-white">
        <template #icon>
            <el-image
            class="w-40"
                src="https://images.unsplash.com/photo-1621508638997-e30808c10653?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </template>
        <template #extra>
            <el-button type="primary" @click="navigateTo('/auth/register')"">Đăng ký</el-button>
        </template>
    </el-result>
</template>