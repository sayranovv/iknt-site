// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: true,
  plugins: ['~/plugins/three.client.js'],
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  },
  modules: [
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Inter: [100, 300, 400, 500, 700, 900]
    }
  }
})
