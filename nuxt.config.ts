import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "unplugin-icons/nuxt", "@nuxtjs/i18n"],
  css: ["~/assets/styles/index.css"],
  i18n: {
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "vi", name: "Tiếng Việt", file: "vi.json" },
    ],
    lazy: true, // Load file JSON khi cần
    langDir: "locales/", // Thư mục chứa file ngôn ngữ
    defaultLocale: "vi",
    vueI18n: "./i18n.config", // Không có .ts
  },
  runtimeConfig: {
    public: {
      apiBase:
        process.env.NUXT_PUBLIC_API_BASE || "http://localhost:8000/v1/api",
    },
  },
  app: {
    head: {
      title: "TriPacker - Công cụ lập danh sách hành lý",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/logo/tripacker.png" },
      ],
    },
  },
});
