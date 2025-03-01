export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', "@nuxt/fonts", '@nuxt/image', '@nuxt/icon', 'shadcn-nuxt', 'lenis/nuxt', 'v-gsap-nuxt'],

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
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
})
