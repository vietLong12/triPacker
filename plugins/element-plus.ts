import { defineNuxtPlugin } from '#app'
import ElementPlus from 'element-plus'
import { ID_INJECTION_KEY, ZINDEX_INJECTION_KEY } from 'element-plus'
import 'element-plus/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus)

  // Fix lỗi ID
  nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
    prefix: Math.floor(Math.random() * 1000),
    current: 0
  })

  // Fix lỗi Z-index
  nuxtApp.vueApp.provide(ZINDEX_INJECTION_KEY, { current: 2000 })
})
