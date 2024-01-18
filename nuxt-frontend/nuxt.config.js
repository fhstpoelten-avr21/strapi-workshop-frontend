export default {
  target: 'static',

  head: {
    title: 'cms_workshop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/tailwindcss'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/strapi',
    // TODO: 2. add rich-text-plugin here
  ],

  axios: {},

  // Strapi module configuration
  strapi: {
      // TODO: 1. Add Strapi Configuration
  },

  // See https://github.com/markdown-it/markdown-it#readme
  // TODO: 3. add rich-text-plugin options here


  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
