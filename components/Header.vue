<template>
  <header class="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">

      <!-- Desktop navigation -->
      <nav class="hidden md:flex md:gap-x-6 lg:gap-x-8" :class="route.path === '/' ? 'hidden' : ''">
        <NuxtLink 
          v-for="item in navigationItems" 
          :key="item.name" 
          :to="item.href"
          class="text-sm font-medium text-gray-600 transition-colors hover:text-purple-700"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-4" :class="route.path === '/' ? 'hidden' : ''">
        <!-- Desktop buttons -->
        <div class="hidden md:flex md:items-center md:gap-3">
          <Button variant="ghost" size="sm">
            Log in
          </Button>
          <Button size="sm" class="bg-purple-600 text-white hover:bg-purple-700">
            Sign up
          </Button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { SparklesIcon, MenuIcon } from 'lucide-vue-next'

const route = useRoute()
const user = useSupabaseUser()

const navigationItems = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
]
</script>