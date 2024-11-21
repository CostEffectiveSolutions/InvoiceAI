// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/supabase',
    'nuxt-headlessui',
    // '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    "@nuxt/fonts"
  ],

  headlessui: {
    prefix: ''
  },
  supabase: {
    url: 'env',
    key: 'env',
    redirect: false,
    // redirectOptions: {
    //   login: '/',
    //   callback: '/confirm',
    //   include: ['/admin(/*)?']
    // }
  },
})
