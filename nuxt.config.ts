export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', "@nuxt/fonts", '@nuxt/image', '@nuxt/icon', 'shadcn-nuxt', 'lenis/nuxt', 'v-gsap-nuxt'],

  supabase: {
    url: 'https://lmestjkqmdxeqwmkwrwa.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtZXN0amtxbWR4ZXF3bWt3cndhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3OTU0MzIsImV4cCI6MjAyNjM3MTQzMn0.l8RUi4QGwGdti58UAbSobmyUSp9SuPxgRNGKGSVduhs',
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