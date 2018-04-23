require('dotenv').config()

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'TOMO Explorer', meta: [
      {charset: 'utf-8'}, {
        name: 'viewport', content: 'width=device-width, initial-scale=1',
      }, {
        hid: 'description', name: 'description', content: 'Nuxt.js project',
      },
    ], link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css',
      },
    ],
  },
  plugins: [
    '~/plugins/axios',
    '~/plugins/bootstrap-vue',
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  css: [
    '~/assets/scss/app.scss',
  ],
  env: process.env,
  axios: {
    baseURL: process.env.API_URL
  },
  loading: {
    color: '#fff',
    height: '2px',
  },
  /*
  ** Add axios globally
  */
  build: {
    extractCSS: true,
    cssSourceMap: true,
    /*
    ** Run ESLINT on save
    */
    // extend (config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
}