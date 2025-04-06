<template>
  <vue-lenis root>
    <div class="flex min-h-screen flex-col">
      <div class="flex-1">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </div>
  </vue-lenis>
  <ClientOnly>
    <Toaster class="pointer-events-auto" />
  </ClientOnly>
</template>
<script setup>
import { Toaster } from '@/components/ui/sonner'
// import { useLenis } from 'lenis/vue'

// Add site-wide meta tags for SEO
useHead({
  title: 'AI Starter Kit - Modern Development with Nuxt & Supabase',
  meta: [
    { name: 'description', content: 'Jump-start your AI applications with this powerful starter kit featuring Nuxt 3, Supabase, Shadcn UI components, and stunning visual effects.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'robots', content: 'index, follow' },
    { name: 'og:type', content: 'website' },
    { name: 'og:title', content: 'AI Starter Kit - Modern Development with Nuxt & Supabase' },
    { name: 'og:description', content: 'Jump-start your AI applications with this powerful starter kit featuring Nuxt 3, Supabase, Shadcn UI components, and stunning visual effects.' },
    { name: 'og:image', content: '/og-image.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})

// const lenis = useLenis((lenis) => {
//   console.log('page callback', lenis)
// })

// watch(lenis, (lenis) => {
//   console.log('page', lenis)
// })
</script>
<style>
body {
  font-family: Nunito, serif;
  font-weight: 600;
}

.font-courier {
  font-family: Courier Prime;
}

.slide-fadeup-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fadeup-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fadeup-enter-from,
.slide-fadeup-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide up transition */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Scale transition */
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease-out;
}

.scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.scale-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

/* Shimmer animation */
@keyframes shimmer {
  0% {
    background-position: -100% 0;
  }

  100% {
    background-position: 100% 0;
  }
}

.animate-shimmer {
  animation: shimmer 2s linear infinite;
  background-size: 200% 100%;
}
</style>