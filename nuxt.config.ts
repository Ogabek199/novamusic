// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: false,

  modules: ['@nuxtjs/tailwindcss'],

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.css'
  ],

  runtimeConfig: {
    public: {
      appName: process.env.NUXT_PUBLIC_APP_NAME || 'NovaMusic',
      youtubeApiKey: process.env.NUXT_PUBLIC_YOUTUBE_API_KEY || 'AIzaSyBOr_0rN-RMsO9EtJ8sf4rVKBJp27n5_IA'
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'uz',
        class: 'dark'
      },
      title: 'NovaMusic - Apple Music PWA',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no'
        },
        { name: 'theme-color', content: '#FA2D48' },
        {
          name: 'description',
          content: 'NovaMusic - YouTube musiqalarini takrorlanmasdan tinglang. Apple Music uslubidagi zamonaviy PWA.'
        },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: 'NovaMusic' }
      ],
      link: [
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32.png' },
        { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-180.png' }
      ],
      script: [
        {
          src: 'https://www.youtube.com/iframe_api',
          async: true
        }
      ]
    }
  }
});
