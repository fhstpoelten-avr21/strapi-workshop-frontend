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
    '@nuxtjs/markdownit',
  ],

  axios: {},

  // Strapi module configuration
  strapi: {
    // Options
    url: process.env.STRAPI_URL || 'http://localhost:3000/api',
    entities: ['articles', 'projects', 'project_categories', 'categories', 'visitor_messages'],
  },

  // See https://github.com/markdown-it/markdown-it#readme
  // [optional] markdownit options
  markdownit: {
    runtime: true, // Support `$md()`
      preset: 'default',
      linkify: true,
      breaks: true,
      use: ['markdown-it-div', 'markdown-it-attrs'],
  },



  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
