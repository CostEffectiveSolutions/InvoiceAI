import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/main.css'],
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  modules:  [
    // '@nuxtjs/tailwindcss',
     '@nuxtjs/supabase'],

  supabase: {
    url:'https://lmestjkqmdxeqwmkwrwa.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtZXN0amtxbWR4ZXF3bWt3cndhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3OTU0MzIsImV4cCI6MjAyNjM3MTQzMn0.l8RUi4QGwGdti58UAbSobmyUSp9SuPxgRNGKGSVduhs',
  },
})
