# Sử dụng image Node.js nhẹ
FROM node:18-alpine 

# Cài đặt Git
RUN apk add --no-cache git

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và pnpm-lock.yaml vào container
COPY package.json pnpm-lock.yaml ./

# Cài đặt pnpm
RUN npm install -g pnpm

# Cài đặt dependencies
RUN pnpm install --frozen-lockfile

# Sao chép toàn bộ mã nguồn vào container (trừ file không cần thiết)
COPY . .

# Build ứng dụng Nuxt 3
RUN pnpm build

# Mở cổng 3000
EXPOSE 3000

# Lệnh chạy ứng dụng
CMD ["pnpm", "preview"]
