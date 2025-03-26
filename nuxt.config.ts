// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "unplugin-icons/nuxt"],
  css: ["~/assets/styles/index.css"],
  runtimeConfig: {
    public: {
      apiBase:
        process.env.NUXT_PUBLIC_API_BASE || "http://localhost:8000/v1/api",
    },
  },
  pwa: {
    // ✅ Cấu hình PWA
    manifest: {
      name: "TriPacker",
      short_name: "TriPacker",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#4a90e2",
      icons: [
        {
          src: "/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/api\.yourbackend\.com\//,
          handler: "NetworkFirst",
          method: "GET",
        },
      ],
    },
  },
});
