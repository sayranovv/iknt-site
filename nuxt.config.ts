// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/google-fonts'],
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  },
  googleFonts: {
    families: {
      Inter: [100, 300, 400, 500, 700, 900]
    }
  }
})
