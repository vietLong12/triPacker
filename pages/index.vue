<template>
  <div class="bg-white min-h-screen flex flex-col">
    <!-- Navbar -->
    <header class="flex justify-between items-center py-6 px-8 shadow-sm">
      <div class="text-2xl font-bold text-indigo-600">
        🎒 Packing List Maker
      </div>
      <nav class="space-x-6 hidden md:flex text-sm text-gray-700">
        <a href="#features" class="hover:text-indigo-500">Tính năng</a>
        <a href="#community" class="hover:text-indigo-500">Kho cộng đồng</a>
        <a href="#testimonials" class="hover:text-indigo-500">Đánh giá</a>
        <a href="#faq" class="hover:text-indigo-500">FAQ</a>
        <a href="#contact" class="hover:text-indigo-500">Liên hệ</a>
      </nav>
      <div class="space-x-3 text-sm">
        <button
          class="px-4 py-1 rounded border text-indigo-600 hover:bg-indigo-50"
        >
          Đăng nhập
        </button>
        <button
          class="px-4 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Đăng ký
        </button>
      </div>
    </header>

    <!-- Hero -->
    <section
      class="flex flex-col-reverse md:flex-row items-center px-8 py-16 bg-gradient-to-r from-indigo-100 to-indigo-50"
    >
      <div class="flex-1 space-y-6">
        <h1 class="text-4xl font-bold text-indigo-700">
          Công cụ lập danh sách hành lý tối ưu cho mọi chuyến đi
        </h1>
        <p class="text-gray-600 text-sm">
          Tạo checklist đóng gói thông minh, cá nhân hóa và chia sẻ dễ dàng chỉ
          trong vài phút.
        </p>
        <div class="space-x-3">
          <button
            class="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700"
          >
            Bắt đầu ngay
          </button>
          <button
            class="px-5 py-2 border rounded text-indigo-600 hover:bg-indigo-50"
          >
            Xem mẫu thử
          </button>
        </div>
      </div>
      <div class="flex-1">
        <img
          src="https://illustrations.popsy.co/gray/packing.svg"
          alt="hero"
          class="w-full"
        />
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="px-8 py-14 space-y-10">
      <h2 class="text-center text-2xl font-bold text-indigo-700">
        Tính năng nổi bật
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          class="p-4 border rounded-lg bg-white shadow hover:shadow-lg transition space-y-2"
        >
          <h3 class="font-semibold text-indigo-600">Checklist tự động</h3>
          <p class="text-sm text-gray-600">
            Đề xuất danh sách phù hợp dựa trên điểm đến, thời tiết và mục đích
            chuyến đi.
          </p>
        </div>
        <div
          class="p-4 border rounded-lg bg-white shadow hover:shadow-lg transition space-y-2"
        >
          <h3 class="font-semibold text-indigo-600">
            Cá nhân hóa & Lưu template
          </h3>
          <p class="text-sm text-gray-600">
            Tùy chỉnh checklist theo ý bạn và lưu lại để sử dụng cho các lần
            sau.
          </p>
        </div>
        <div
          class="p-4 border rounded-lg bg-white shadow hover:shadow-lg transition space-y-2"
        >
          <h3 class="font-semibold text-indigo-600">Chia sẻ & Cộng tác</h3>
          <p class="text-sm text-gray-600">
            Chia sẻ checklist cho nhóm hoặc bạn đồng hành, cùng nhau chuẩn bị
            hành lý.
          </p>
        </div>
      </div>
    </section>

    <!-- Community Templates -->
    <section id="community" class="px-8 py-14 bg-indigo-50 space-y-6">
      <h2 class="text-center text-2xl font-bold text-indigo-700">
        Kho cộng đồng & Chia sẻ template
      </h2>
      <p class="text-center text-sm text-gray-600 max-w-2xl mx-auto">
        Tham khảo và tải về hàng trăm checklist được chia sẻ bởi cộng đồng. Bạn
        cũng có thể đóng góp checklist của mình vào kho chia sẻ!
      </p>
      <div class="flex justify-center gap-4 flex-wrap">
        <div
          class="p-4 border rounded-lg bg-white shadow w-60 space-y-2 hover:shadow-lg transition"
        >
          <h4 class="font-semibold text-indigo-600">Template: Du lịch biển</h4>
          <p class="text-xs text-gray-600">
            Checklist phù hợp cho các chuyến đi biển vào mùa hè.
          </p>
          <button class="text-sm text-indigo-600 hover:underline">
            Tải về
          </button>
        </div>
        <div
          class="p-4 border rounded-lg bg-white shadow w-60 space-y-2 hover:shadow-lg transition"
        >
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
        <div
          class="p-4 border rounded-lg bg-white shadow w-60 space-y-2 hover:shadow-lg transition"
        >
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
        <button
          class="px-5 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Đóng góp checklist của bạn
        </button>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="px-8 py-14 space-y-8">
      <h2 class="text-center text-2xl font-bold text-indigo-700">
        Người dùng nói gì?
      </h2>
      <div class="flex flex-col md:flex-row justify-center gap-6">
        <div class="bg-white border rounded-lg p-4 shadow space-y-2 max-w-xs">
          <p class="text-sm text-gray-600">
            "Ứng dụng giúp tôi không còn quên đồ mỗi lần đi du lịch!"
          </p>
          <div class="text-xs font-medium text-indigo-600">
            - Minh Anh, Freelancer
          </div>
        </div>
        <div class="bg-white border rounded-lg p-4 shadow space-y-2 max-w-xs">
          <p class="text-sm text-gray-600">
            "Tính năng cộng tác rất hữu ích cho team đi phượt của mình."
          </p>
          <div class="text-xs font-medium text-indigo-600">
            - Hoàng Nam, Trekker
          </div>
        </div>
        <div class="bg-white border rounded-lg p-4 shadow space-y-2 max-w-xs">
          <p class="text-sm text-gray-600">
            "Tôi thích việc có thể chia sẻ checklist lên kho cộng đồng."
          </p>
          <div class="text-xs font-medium text-indigo-600">- Thu Trang, HR</div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="px-8 py-14 bg-indigo-50 space-y-6">
      <h2 class="text-center text-2xl font-bold text-indigo-700">
        Câu hỏi thường gặp
      </h2>
      <div class="max-w-3xl mx-auto space-y-4">
        <div>
          <h4 class="font-semibold text-gray-700">
            Checklist có lưu lại trên tài khoản không?
          </h4>
          <p class="text-sm text-gray-600">
            Có! Tất cả các checklist sẽ được lưu trong tài khoản để bạn tái sử
            dụng.
          </p>
        </div>
        <div>
          <h4 class="font-semibold text-gray-700">
            Tôi có thể chỉnh sửa checklist cộng đồng không?
          </h4>
          <p class="text-sm text-gray-600">
            Hoàn toàn được! Bạn có thể tải về và tùy chỉnh theo nhu cầu cá nhân.
          </p>
        </div>
        <div>
          <h4 class="font-semibold text-gray-700">
            Ứng dụng có miễn phí không?
          </h4>
          <p class="text-sm text-gray-600">
            Phiên bản cơ bản hoàn toàn miễn phí. Gói nâng cao sẽ có thêm các
            tính năng cộng tác và AI đề xuất thông minh.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact & CTA -->
    <!-- Call to Action Section -->
    <section
      id="cta"
      class="py-20 bg-indigo-600 text-white text-center space-y-6"
    >
      <h2 class="text-3xl md:text-4xl font-bold">
        Sẵn sàng cho chuyến đi tiếp theo?
      </h2>
      <p class="text-base md:text-lg text-indigo-100 max-w-2xl mx-auto">
        Tạo checklist cá nhân hóa, khám phá gợi ý thông minh và đóng góp
        checklist cho cộng đồng du lịch Việt Nam.
      </p>
      <div class="space-x-4">
        <button
          class="bg-white text-indigo-600 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition"
        >
          Bắt đầu ngay
        </button>
        <button
          class="bg-transparent border border-white px-6 py-2 rounded hover:bg-white hover:text-indigo-600 transition"
        >
          Khám phá thêm
        </button>
      </div>
    </section>

    <!-- Contact & Footer -->
    <footer class="bg-indigo-800 text-indigo-100 py-12">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- About -->
        <div>
          <h4 class="font-semibold mb-3">🎒 Packing List Maker</h4>
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
            <li>Email: support@packinglist.vn</li>
            <li>Hotline: +84 987 654 321</li>
            <li>Địa chỉ: Hà Nội, Việt Nam</li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h4 class="font-semibold mb-3">Mạng xã hội</h4>
          <div class="flex space-x-4 text-xl">
            <a href="#" class="hover:text-white transition">🌐</a>
            <a href="#" class="hover:text-white transition">📘</a>
            <a href="#" class="hover:text-white transition">🐦</a>
            <a href="#" class="hover:text-white transition">📸</a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 text-center text-xs text-indigo-300">
        © 2025 Packing List Maker. All rights reserved.
      </div>
    </footer>
  </div>
</template>
