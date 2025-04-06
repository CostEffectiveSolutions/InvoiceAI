import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase', "@nuxt/fonts", '@nuxt/image', '@nuxt/icon', 'shadcn-nuxt', '@nuxtjs/seo', 'lenis/nuxt'],

  lenis: {
    options: {
      root: true,
      smooth: true,
      smoothWheel: true,
      autoRaf: true,
    },
  },

  css: ['~/assets/css/tailwind.css'],

  vite: {
  plugins: [
      tailwindcss(),
    ],
  },

  app: {
    pageTransition: { name: 'fade' },
  },

  components:[
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  // Auto-import the toast function globally
  imports: {
    imports: [
      {
        from: 'vue-sonner',
        name: 'toast'
      }
    ]
  },

  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },

  supabase: {
    url: 'https://qsjarfrkydcmvtigeiqh.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzamFyZnJreWRjbXZ0aWdlaXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyOTA3MzgsImV4cCI6MjA1Nzg2NjczOH0.n7HsRsnx0fYPyop-05YJGitywxEN2tTW7-Xljan6-2A',
    serviceKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzamFyZnJreWRjbXZ0aWdlaXFoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MjI5MDczOCwiZXhwIjoyMDU3ODY2NzM4fQ.vbD7j_YOg99U0FzgRTZu1VFH-I2o9_zhimN4V88R0Ak',
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/', '/admin/*'],
    }
  },

  compatibilityDate: '2025-04-06'
})