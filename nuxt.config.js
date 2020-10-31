export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'demo1',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://unpkg.com/swiper/swiper-bundle.min.css"}
    ],
    script:[
      { type:"text/javascript", src:"https://unpkg.com/swiper/swiper-bundle.min.js"}
    ]
  },

// Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "./assets/normalize.css",
    './assets/scss/common.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources:{
    scss:"./assets/scss/common.scss"
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
