// https://nuxt.com/docs/api/configuration/nuxt-config
import compression from 'vite-plugin-compression'

export default defineNuxtConfig({
  vite: {
    plugins: [compression()]
  },

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
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://iknt.site.vercel.app',
    gzip: true
  },

  googleFonts: {
    families: {
      Inter: [100, 300, 400, 500, 700, 900]
    }
  },

  compatibilityDate: '2025-02-25'
})