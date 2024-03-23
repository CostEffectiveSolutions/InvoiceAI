<template>
  <div>
    <Header/>
    <NuxtPage />
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