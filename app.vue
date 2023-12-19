<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'Interspecies Money',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>