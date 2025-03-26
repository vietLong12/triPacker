<template>
  <el-dialog v-model="dialogToggle" title="Tips" width="500" draggable overflow>
    <div>
      <span>It's an overflow draggable Dialog</span>
      <div class="mt-4">
        <!-- Hiển thị danh sách người đi cùng và công việc -->
        <div v-for="(person, index) in people" :key="index" class="mb-3 flex justify-between items-center">
          <div>
            <h5 class="font-semibold">{{ person.name }}</h5>
            <p class="text-sm text-gray-600">Công việc: {{ person.task }}</p>
          </div>
          <div class="flex space-x-2">
            <el-button size="mini" @click="editPerson(index)" type="warning">Sửa</el-button>
            <el-button size="mini" @click="removePerson(index)" type="danger">Xóa</el-button>
          </div>
        </div>
      </div>

      <!-- Thêm người đi cùng -->
      <el-button class="mt-4" type="primary" @click="addPerson">Thêm người đi cùng</el-button>
      
      <!-- Form chỉnh sửa người đi cùng -->
      <el-dialog v-model="isEditDialogVisible" title="Chỉnh sửa người đi cùng" width="400">
        <el-form :model="editPersonData" label-width="100px">
          <el-form-item label="Tên người">
            <el-input v-model="editPersonData.name"></el-input>
          </el-form-item>
          <el-form-item label="Công việc">
            <el-input v-model="editPersonData.task"></el-input>
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="isEditDialogVisible = false">Hủy</el-button>
          <el-button type="primary" @click="saveEditPerson">Lưu</el-button>
        </template>
      </el-dialog>

    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogToggle = false">Cancel</el-button>
        <el-button type="primary" @click="dialogToggle = false">Confirm</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue';

// Trạng thái để điều khiển dialog
const dialogToggle = ref(false);
const isEditDialogVisible = ref(false);

// Danh sách người đi cùng và công việc của từng người
const people = ref([
  { name: 'Nam', task: 'Dụng cụ y tế & thuốc' },
  { name: 'Linh', task: 'Đồ ăn nhẹ & nước uống' },
  { name: 'Duy', task: 'Thiết bị điện tử & sạc' },
]);

// Dữ liệu người đi cùng để chỉnh sửa
const editPersonData = ref({
  name: '',
  task: ''
});

// Hàm hiển thị dialog chính
const showDialog = () => {
  dialogToggle.value = true;
};

// Thêm người đi cùng mới
const addPerson = () => {
  // Mở form chỉnh sửa để thêm người mới
  editPersonData.value = { name: '', task: '' }; // Reset dữ liệu
  isEditDialogVisible.value = true;
};

// Sửa thông tin người đi cùng
const editPerson = (index) => {
  editPersonData.value = { ...people.value[index] }; // Copy dữ liệu để chỉnh sửa
  isEditDialogVisible.value = true;
};

// Lưu thông tin người đi cùng sau khi sửa
const saveEditPerson = () => {
  if (editPersonData.value.name && editPersonData.value.task) {
    const index = people.value.findIndex(person => person.name === editPersonData.value.name);
    if (index !== -1) {
      people.value[index] = { ...editPersonData.value };
    } else {
      // Nếu là người mới, thêm vào danh sách
      people.value.push({ ...editPersonData.value });
    }
    isEditDialogVisible.value = false; // Đóng form chỉnh sửa
  }
};

// Xóa người đi cùng
const removePerson = (index) => {
  people.value.splice(index, 1);
};

defineExpose({
  showDialog,
});
</script>

<style scoped>
/* Bạn có thể thêm CSS cho dialog hoặc các phần tử bên trong */
</style>
