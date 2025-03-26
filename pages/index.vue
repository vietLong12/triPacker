<template>
  <div class="min-h-screen flex flex-col">
    <section class="flex flex-col-reverse md:flex-row items-center px-8 bg-introduction mb-10 py-32">
      <el-row class="w-full">
        <el-col :span="12"></el-col>
        <el-col :span="12">
          <div class="flex-1 space-y-6">
            <h1 class="text-4xl font-bold text-primary  text-center">
              Công cụ lập danh sách hành lý <br />
              Tối ưu cho mọi chuyến đi
            </h1>
            <p class="text-primary text-xl text-center">
              Tạo checklist đóng gói thông minh <br />
              Cá nhân hóa <br />
              Chia sẻ dễ dàng chỉ trong vài phút.
            </p>
            <div class="space-x-3 flex justify-center">
              <el-button type="primary" size="large" @click="handleStart" :loading="loadingNavigate">
                Bắt đầu ngay
              </el-button>
              <el-button type="primary" size="large" plain @click="navigateTo('/templates')">
                Xem mẫu thử
              </el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>
    <!-- Features -->
    <section id="features" class="px-8 py-10 space-y-10 mb-4">
      <h2 class="text-center text-3xl font-bold uppercase">
        Tính năng nổi bật
      </h2>
      <div class="grid gap-6">
        <!-- Row 1: 3 card -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <el-card
            class="bg-white border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm transition-colors duration-500">
            <h3 class="font-semibold text-lg mb-2">Checklist tự động</h3>
            <p class="text-sm">
              Gợi ý danh sách hành lý dựa trên điểm đến, thời tiết và thời gian
              của chuyến đi.
            </p>
          </el-card>

          <el-card
            class="bg-white border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm transition-colors duration-500">
            <h3 class="font-semibold text-lg mb-2">
              Cá nhân hóa & Lưu template
            </h3>
            <p class="text-sm">
              Tự do thêm hoặc bớt các mục, sau đó lưu lại template cho các
              chuyến đi tiếp theo.
            </p>
          </el-card>

          <el-card
            class="bg-white border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm transition-colors duration-500">
            <h3 class="font-semibold text-lg mb-2">Gợi ý thông minh</h3>
            <p class="text-sm">
              Đưa ra các lời khuyên đóng gói theo mùa, phong cách du lịch và các
              hoạt động dự kiến.
            </p>
          </el-card>
        </div>

        <!-- Row 2: 2 card nằm giữa -->
        <div class="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <el-card
            class="bg-white border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm transition-colors duration-500">
            <h3 class="font-semibold text-lg mb-2">Chia sẻ & Cộng tác</h3>
            <p class="text-sm">
              Chia sẻ checklist với bạn đồng hành hoặc nhóm, cùng nhau chuẩn bị
              hành lý hiệu quả.
            </p>
          </el-card>

          <el-card
            class="bg-white border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm transition-colors duration-500">
            <h3 class="font-semibold text-lg mb-2">Đồng bộ & Xuất file</h3>
            <p class="text-sm">
              Đồng bộ checklist trên nhiều thiết bị và xuất ra file PDF hoặc
              chia sẻ trực tuyến.
            </p>
          </el-card>
        </div>
      </div>
    </section>
    <hr class="mx-32" />

    <!-- Community Templates -->
    <section id="community" class="px-8 py-14 my-10 space-y-6">
      <h2 class="text-center text-3xl font-bold uppercase">
        Kho cộng đồng & Chia sẻ template
      </h2>
      <p class="text-center text-sm max-w-2xl mx-auto">
        Tham khảo và tải về hàng trăm checklist được chia sẻ bởi cộng đồng. Bạn
        cũng có thể đóng góp checklist của mình vào kho chia sẻ!
      </p>
      <div class="flex justify-center gap-4 flex-wrap">
        <div class="p-4 border rounded-lg bg-white shadow w-60 space-y-2 hover:shadow-lg transition">
          <h4 class="font-semibold text-indigo-600">Template: Du lịch biển</h4>
          <p class="text-xs text-gray-600">
            Checklist phù hợp cho các chuyến đi biển vào mùa hè.
          </p>
          <button class="text-sm text-indigo-600 hover:underline">
            Tải về
          </button>
        </div>
        <div class="p-4 border rounded-lg bg-white shadow w-60 space-y-2 hover:shadow-lg transition">
          <h4 class="font-semibold text-indigo-600">
            Template: Công tác 3 ngày
          </h4>
          <p class="text-xs text-gray-600">
            Checklist đầy đủ cho các chuyến đi công tác ngắn ngày.
          </p>
          <button class="text-sm text-indigo-600 hover:underline">
            Tải về
          </button>
        </div>
        <div class="p-4 border rounded-lg bg-white shadow w-60 space-y-2 hover:shadow-lg transition">
          <h4 class="font-semibold text-indigo-600">Template: Trekking núi</h4>
          <p class="text-xs text-gray-600">
            Đầy đủ các vật dụng cần thiết cho hành trình khám phá thiên nhiên.
          </p>
          <button class="text-sm text-indigo-600 hover:underline">
            Tải về
          </button>
        </div>
      </div>
      <div class="text-center mt-4">
        <el-button type="primary" size="large">
          Đóng góp checklist của bạn
        </el-button>
      </div>
    </section>
    <hr class="mx-32" />
    <!-- Testimonials -->
    <section id="testimonials" class="px-8 py-14 space-y-8">
      <h2 class="text-center text-3xl uppercase font-bold">
        Người dùng nói gì?
      </h2>
      <div class="flex flex-col md:flex-row justify-center gap-6">
        <el-card class="border rounded-xl p-6 shadow-lg space-y-4 max-w-xs text-center transition-colors duration-500">
          <p class="text-xl italic leading-relaxed text-primary-light dark:text-primary-dark">
            "Ứng dụng giúp tôi không còn quên đồ mỗi lần đi du lịch! Trải nghiệm
            rất mượt và dễ dùng."
          </p>
          <el-avatar shape="square" :size="120" fit="cover" class="mx-auto rounded-lg my-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mgwyiwU4ROueXVLWmXaU5V87HnIqau_y-w&s" />
          <div class="font-semibold text-primary dark:text-secondary">
            Minh Anh
          </div>
          <div class="text-sm text-primary dark:text-secondary">Freelancer</div>
        </el-card>
        <el-card class="border rounded-xl p-6 shadow-lg space-y-4 max-w-xs text-center transition-colors duration-500">
          <p class="text-xl italic leading-relaxed text-primary-light dark:text-primary-dark">
            "Ứng dụng giúp tôi không còn quên đồ mỗi lần đi du lịch! Trải nghiệm
            rất mượt và dễ dùng."
          </p>
          <el-avatar shape="square" :size="120" fit="cover" class="mx-auto rounded-lg my-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mgwyiwU4ROueXVLWmXaU5V87HnIqau_y-w&s" />
          <div class="font-semibold text-primary dark:text-secondary">
            Minh Anh
          </div>
          <div class="text-sm text-primary dark:text-secondary">Freelancer</div>
        </el-card>
        <el-card class="border rounded-xl p-6 shadow-lg space-y-4 max-w-xs text-center transition-colors duration-500">
          <p class="text-xl italic leading-relaxed text-primary-light dark:text-primary-dark">
            "Ứng dụng giúp tôi không còn quên đồ mỗi lần đi du lịch! Trải nghiệm
            rất mượt và dễ dùng."
          </p>
          <el-avatar shape="square" :size="120" fit="cover" class="mx-auto rounded-lg my-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mgwyiwU4ROueXVLWmXaU5V87HnIqau_y-w&s" />
          <div class="font-semibold text-primary dark:text-secondary">
            Minh Anh
          </div>
          <div class="text-sm text-primary dark:text-secondary">Freelancer</div>
        </el-card>
      </div>
    </section>
    <hr class="mx-32" />
    <!-- FAQ -->
    <section id="faq" class="px-8 py-14 space-y-6">
      <h2 class="text-center text-3xl font-bold uppercase">
        Câu hỏi thường gặp
      </h2>
      <div class="max-w-3xl mx-auto space-y-6">
        <el-card v-for="(faq, index) in faqs" :key="index"
          class="bg-white border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm transition-colors duration-500">
          <h4 class="font-semibold text-lg mb-2">
            {{ faq.question }}
          </h4>
          <p class="text-sm leading-relaxed">
            {{ faq.answer }}
          </p>
        </el-card>
      </div>
    </section>

    <!-- Contact & CTA -->
    <!-- Call to Action Section -->
    <section id="cta"
      class="py-20 bg-indigo-600 dark:bg-background-dark dark:text-secondary-dark text-white text-center space-y-6 transition-colors duration-500">
      <h2 class="text-3xl md:text-4xl font-bold uppercase">
        Sẵn sàng cho chuyến đi tiếp theo?
      </h2>
      <p class="text-base md:text-lg max-w-2xl mx-auto">
        Tạo checklist cá nhân hóa, khám phá gợi ý thông minh và đóng góp
        checklist cho cộng đồng du lịch Việt Nam.
      </p>
      <div class="space-x-4">
        <el-button type="primary"> Bắt đầu ngay </el-button>
        <el-button plain type="primary"> Khám phá thêm </el-button>
      </div>
    </section>

    <!-- Contact & Footer -->
    <footer class="py-12">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- About -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <img class="h-[44px]" src="../public/logo/tripacker.png" alt="TriPacker logo" />
            <el-text class="font-bold !text-2xl !text-primary-light dark:!text-primary-dark">TriPacker</el-text>
          </div>
          <p class="text-sm">
            Ứng dụng hỗ trợ lập danh sách hành lý thông minh cho mọi chuyến đi,
            từ du lịch thư giãn đến công tác chuyên nghiệp.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold mb-3">Liên kết nhanh</h4>
          <ul class="text-sm space-y-2">
            <li><a href="#features" class="hover:underline">Tính năng</a></li>
            <li>
              <a href="#community" class="hover:underline">Kho cộng đồng</a>
            </li>
            <li><a href="#faq" class="hover:underline">FAQ</a></li>
            <li><a href="#cta" class="hover:underline">Bắt đầu</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-semibold mb-3">Liên hệ</h4>
          <ul class="text-sm space-y-2">
            <li>Email: tripacker.vie@gmail.com</li>
            <li>Hotline: +84 987 654 321</li>
            <li>Địa chỉ: Hà Nội, Việt Nam</li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h4 class="font-semibold mb-3">Mạng xã hội</h4>
          <div class="flex space-x-4 text-xl">
            <el-icon class="cursor-pointer">
              <ChromeFilled />
            </el-icon>
            <el-icon class="cursor-pointer">
              <ChromeFilled />
            </el-icon>
            <el-icon class="cursor-pointer">
              <ChromeFilled />
            </el-icon>
            <el-icon class="cursor-pointer">
              <ChromeFilled />
            </el-icon>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 text-center text-xs text-indigo-300">
        © 2025 TriPacker. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ElLoading } from "element-plus";
import Headers from "../components/Headers.vue";
import { ChromeFilled } from "@element-plus/icons-vue";

const loadingNavigate = ref(false);

const faqs = [
  {
    question: "Checklist có lưu lại trên tài khoản không?",
    answer:
      "Có! Tất cả các checklist sẽ được lưu trong tài khoản để bạn tái sử dụng.",
  },
  {
    question: "Tôi có thể chỉnh sửa checklist cộng đồng không?",
    answer:
      "Hoàn toàn được! Bạn có thể tải về và tùy chỉnh theo nhu cầu cá nhân.",
  },
  {
    question: "Ứng dụng có miễn phí không?",
    answer:
      "Phiên bản cơ bản hoàn toàn miễn phí. Gói nâng cao sẽ có thêm các tính năng cộng tác và AI đề xuất thông minh.",
  },
];

const handleStart = () => {
  loadingNavigate.value = true;
  setTimeout(() => {
    navigateTo("/step1");
  }, 1000);
};
</script>
<style scoped>
.bg-introduction {
  position: relative;
  background-image: url("../assets/bg/photo-1501446529957-6226bd447c46.avif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.bg-introduction::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  /* chỉnh độ mờ */
  z-index: 1;
}

.bg-introduction>* {
  position: relative;
  z-index: 2;
}
</style>
