<template>
  <el-form
    label-position="top"
    class="space-y-10 form-create"
    :model="form"
    :rules="rules"
    ref="formRef"
  >
    <!-- Block 1: Loại chuyến đi -->
    <div class="space-y-4">
      <h3 class="text-xl font-semibold">Kiểu chuyến đi</h3>
      <el-form-item prop="tripType">
        <el-select
          v-model="form.tripType"
          placeholder="Chọn kiểu chuyến đi"
          class="w-full"
        >
          <el-option label="Du lịch" value="travel" />
          <el-option label="Công tác" value="business" />
          <el-option label="Phiêu lưu" value="adventure" />
          <el-option label="Gia đình" value="family" />
          <el-option label="Khác" value="other" />
        </el-select>
      </el-form-item>
    </div>

    <!-- Block 2: Thông tin cơ bản -->
    <div class="space-y-4">
      <h3 class="text-xl font-semibold">Thông tin cơ bản</h3>
      <el-form-item label="Điểm đến" prop="destination">
        <el-input
          v-model="form.destination"
          placeholder="Ví dụ: Đà Lạt, Việt Nam"
        />
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="Ngày đi" prop="startDate">
            <el-date-picker
              v-model="form.startDate"
              type="date"
              placeholder="Chọn ngày đi"
              class="!w-full"
              format="DD/MM/YYYY"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <template #label>
              <div class="flex items-center justify-between w-full">
                <span class="mr-1">Ngày về</span>
                <span v-if="form.startDate && form.endDate">
                  ({{ tripDuration }} ngày)
                </span>
              </div>
            </template>
            <el-date-picker
              v-model="form.endDate"
              type="date"
              placeholder="Chọn ngày về"
              class="!w-full"
              format="DD/MM/YYYY"
              :disabled-date="
                (date: any) => form.startDate && date < new Date(form.startDate)
              "
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="Số người tham gia" prop="people">
            <el-tooltip content="Tổng số người trong chuyến đi" placement="top">
              <el-input-number
                v-model="form.people"
                :min="1"
                placeholder="Ví dụ: 4"
                class="!w-full"
                controls-position="right"
                :controls="false"
              />
            </el-tooltip>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <template #label>
              <div class="flex items-center justify-between w-full">
                <span class="mr-2">Ngân sách mỗi người (VNĐ)</span>
                <span
                  v-if="form.people && form.budgetPerPerson"
                  class="text-xs text-gray-500 font-normal"
                >
                  Tổng: {{ totalBudget }} VNĐ
                </span>
              </div>
            </template>
            <el-tooltip
              content="Ngân sách dự kiến cho mỗi người"
              placement="top"
            >
              <el-input
                v-model="formattedBudgetPerPerson"
                placeholder="Ví dụ: 2,500,000"
                class="!w-full !text-center input-money"
              >
                <template #suffix><span>VNĐ</span></template>
              </el-input>
            </el-tooltip>
          </el-form-item>
        </el-col>
      </el-row>
    </div>

    <!-- Block 3: Thành viên nhóm -->
    <div class="space-y-4">
      <h3 class="text-xl font-semibold">Thành viên nhóm (tùy chọn)</h3>
      <div
        v-for="(member, index) in form.members"
        :key="index"
        class="border p-4 rounded-lg relative"
      >
        <el-row :gutter="20" class="items-center">
          <el-col :span="11">
            <el-form-item :label="`Thành viên ${index + 1} - Tên`" class="mb-0">
              <el-input
                v-model="member.name"
                placeholder="Nhập tên thành viên"
              />
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="Email" class="mb-0">
              <el-input
                v-model="member.email"
                placeholder="Nhập email thành viên"
              />
            </el-form-item>
          </el-col>
          <el-col :span="2" class="flex justify-end">
            <el-button
              type="danger"
              :icon="Delete"
              circle
              size="small"
              class="mt-[10px]"
              @click="removeMember(index)"
            />
          </el-col>
        </el-row>
      </div>
      <el-button type="primary" plain :icon="Plus" @click="addMember()"
        >Thêm thành viên</el-button
      >
    </div>

    <!-- Block 5: Tùy chọn nâng cao -->
    <el-collapse v-model="activeCollapse" @change="handleCollapseChange">
      <el-collapse-item name="advanced" title="Tùy chọn nâng cao">
        <el-form-item label="Loại phương tiện di chuyển">
          <el-select
            v-model="form.vehicle"
            placeholder="Chọn loại phương tiện di chuyển"
            class="w-full"
          >
            <el-option label="Xe máy" value="Xe máy" />
            <el-option label="Ô tô" value="Ô tô" />
            <el-option label="Xe khách" value="Xe khách" />
            <el-option label="Máy bay" value="Máy bay" />
            <el-option label="Tàu hỏa" value="Tàu hỏa" />
          </el-select>
        </el-form-item>
        <el-form-item label="Ghi chú sức khỏe / hạn chế (nếu có)">
          <el-input
            v-model="form.healthNotes"
            type="textarea"
            rows="3"
            placeholder="Ghi chú sức khỏe"
          >
          </el-input>
        </el-form-item>
      </el-collapse-item>
    </el-collapse>

    <!-- Block 6: Checkbox + Button -->
    <div class="!mt-0">
      <el-checkbox v-model="form.saveTemplate">Lưu lại template</el-checkbox>
      <el-button type="primary" class="w-full mt-2" @click="submitForm(formRef)"
        >Tiếp tục</el-button
      >
    </div>
  </el-form>
</template>

<script setup lang="ts">
import { Delete, InfoFilled, Plus } from "@element-plus/icons-vue";
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import type { ComponentSize, FormInstance, FormRules } from "element-plus";

interface Member {
  name: string;
  email: string;
}

const router = useRouter();
const emit = defineEmits(["update:tripType"]);
const formRef = ref();
const activeCollapse = ref<string[]>([]);

const form = ref({
  tripType: "travel",
  destination: "",
  startDate: "",
  endDate: "",
  people: 1,
  budgetPerPerson: 0,
  members: [] as Member[],
  healthNotes: "",
  saveTemplate: true,
  vehicle: "Ô tô",
});

const rules = {
  destination: [
    { required: true, message: "Bạn chưa nhập điểm đến", trigger: "blur" },
  ],
  startDate: [
    { required: true, message: "Bạn chưa chọn ngày đi", trigger: "change" },
  ],
  endDate: [
    { required: true, message: "Bạn chưa chọn ngày về", trigger: "change" },
  ],
  people: [
    {
      type: "number",
      min: 1,
      message: "Số người tối thiểu là 1",
      trigger: "blur",
    },
  ],
};

const addMember = () => {
  form.value.members.push({ name: "", email: "" });
};
const removeMember = (index: number) => {
  form.value.members.splice(index, 1);
};
const handleCollapseChange = () => {
  setTimeout(() => {
    document
      .querySelector('.el-collapse-item[name="advanced"]')
      ?.scrollIntoView({ behavior: "smooth" });
  }, 0);
};

const tripDuration = computed(() => {
  if (form.value.startDate && form.value.endDate) {
    const start = new Date(form.value.startDate);
    const end = new Date(form.value.endDate);
    const diff = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
    return diff >= 0 ? diff + 1 : 0;
  }
  return 0;
});

const formattedBudgetPerPerson = computed({
  get() {
    return form.value.budgetPerPerson
      ? form.value.budgetPerPerson
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : "";
  },
  set(val: string) {
    form.value.budgetPerPerson = Number(val.replace(/[^\d]/g, ""));
  },
});

const totalBudget = computed(() => {
  return form.value.people
    ? Math.round(form.value.people * form.value.budgetPerPerson).toLocaleString(
        "vi-VN"
      )
    : "0";
});

watch(
  () => form.value.tripType,
  (newValue) => {
    emit("update:tripType", newValue);
  }
);

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!", form.value);
      router.push("/step2");
    } else {
      console.log("error submit!", fields);
      router.push("/step2");
    }
  });
};
</script>
<style>
.form-create .el-form-item__label,
.el-collapse-item__content {
  @apply !text-inherit;
}
.form-create .el-input__inner,
.form-create .el-textarea__inner {
  @apply !text-inherit bg-transparent;
}

.form-create .el-collapse-item__header {
  @apply !text-inherit bg-transparent text-xl font-semibold;
}
.input-money .el-input__inner {
  text-align: center !important;
}

.el-collapse-item__wrap {
  background-color: transparent;
  @apply !text-inherit;
}
</style>
