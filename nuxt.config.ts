export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: '/api', // Gebruik een lokaal proxy-pad
    }
  },

  nitro: {
    routeRules: {
      '/api/**': {
        proxy: 'https://betaalverzoek.intractief.nl/v3/**', // API Intractief -> /api/
        cors: true
      }
    }
  },

  compatibilityDate: '2025-02-04'
});