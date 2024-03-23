<template>
  <div class="flex min-h-[100vh] flex-col">
    <div class="flex-1">
      <Header />
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>
<script setup>
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
})
</script>
<style>
body {
    font-family: Signika, serif;
}
</style>