// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-gtag',
    'nuxt-jsonld',
    'vue3-carousel-nuxt',
    // '@nuxtjs/i18n'
  ],
  plugins:[
    '~/plugins/plugin.js',
  ],
  gtag: {
    id: 'G-KGWLGKHFME',
    config: {
      page_title: 'Interspecies Money'
    }
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  devtools: { enabled: true }
})
