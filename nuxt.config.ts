export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', "@nuxt/fonts", '@nuxt/image', '@nuxt/icon', 'shadcn-nuxt', 'lenis/nuxt', 'v-gsap-nuxt', '@nuxtjs/seo'],

  css: [
    '~/assets/css/transitions.css',
  ],

  site: {
    url: 'https://empowerstudio.eu',
    name: 'Empower Studio',
    description: 'Автоматизирайте бизнес процесите си с изкуствен интелект. Спестете време и намалете разходи с персонализирани AI решения.',
    defaultLocale: 'bg',
  },

  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  supabase: {
    url: 'https://lmestjkqmdxeqwmkwrwa.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtZXN0amtxbWR4ZXF3bWt3cndhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3OTU0MzIsImV4cCI6MjAyNjM3MTQzMn0.l8RUi4QGwGdti58UAbSobmyUSp9SuPxgRNGKGSVduhs',
    redirect: false,
  }
})