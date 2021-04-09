export default {
  head: {
    title: 'algolia-nuxt-routes',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],
  modules: [
  ],
  build: {
    transpile: [
      "vue-instantsearch",
      "instantsearch.js/es"
    ],
  },
  router: {
    parseQuery(queryString) {
      return require('qs').parse(queryString);
    },
    stringifyQuery(object) {
      var queryString = require('qs').stringify(object);
      return queryString ? '?' + queryString : '';
    },
  }
}
