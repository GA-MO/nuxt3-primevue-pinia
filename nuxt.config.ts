import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  runtimeConfig: {
    API_SECRET: '',
    public: {
      API_BASE: '',
      TOKEN_KEY: '',
    },
  },
  build: {
    transpile: ['primevue'],
  },
  css: [
    'normalize.css/normalize.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    'assets/fonts/fonts.css',
    'assets/prime/main.scss',
    'assets/prime/theme.css',
  ],
})
