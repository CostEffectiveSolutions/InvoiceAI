<template>
  <div class="min-h-screen bg-background font-sans antialiased">
    <Header />
    <main class="relative flex min-h-screen flex-col">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'DefaultLayout'
})
</script> 