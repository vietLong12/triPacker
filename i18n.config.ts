import en from './locales/en.json'
import vi from './locales/vi.json'

export default defineI18nConfig(() => ({
  legacy: false, // Dùng Composition API
  locale: 'vi', // Mặc định là tiếng Việt
  fallbackLocale: 'en', // Dự phòng nếu không có ngôn ngữ
  messages: { en, vi }
}));
