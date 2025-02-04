export default defineNuxtConfig({
  modules: ['@nuxt-alt/proxy'],

  runtimeConfig: {
    public: {
      apiBase: '/api', // Proxy-pad
    }
  },

  nitro: {
    devProxy: {
      '/api': {
        target: 'https://betaalverzoek.intractief.nl/v3',
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
})
