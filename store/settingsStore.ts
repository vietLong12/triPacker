import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    darkMode: false,
    language: "vi",
    notifications: true,
  }),
});
