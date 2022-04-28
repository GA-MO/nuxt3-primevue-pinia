import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  runtimeConfig: {
    API_SECRET: '',
    public: {
      API_BASE: '',
    },
  },
  buildModules: ['@pinia/nuxt'],
  build: {
    transpile: ['primevue'],
  },
  css: [
    'normalize.css/normalize.css',
    'assets/fonts/fonts.css',
    'assets/prime/main.scss',
    'assets/prime/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
  ],
})
