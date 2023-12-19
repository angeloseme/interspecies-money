<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const title = 'Interspecies Money'
const description = 'Interspecies Money seeks to give wild animals, trees, and other species the ability to hold and spend money in a trusted and divisible way in order to improve their life outcomes.'
const url = 'https://interspecies.money'
const ogImage = 'https://interspecies.money/img/231219_og-image.png'
useHead({
  title,
  meta: [
    { hid: 'description', name: 'description', content:  description },
    { hid: 'og:title', property: 'og:title', content: title },
    { hid: 'og:url', property: 'og:url', content: url },
    { hid: 'og:description', property: 'og:description', content: description },
    { hid: 'og:image', property: 'og:image', content: ogImage },
    { hid: "twitter:title", name: "twitter:title", content: title },
    { hid: "twitter:url", name: "twitter:url", content: url },
    { hid: 'twitter:description', name: 'twitter:description', content: description },
    { hid: "twitter:image", name: "twitter:image", content: ogImage}
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useJsonld(
  {
    "@context": "http://www.schema.org",
    "@type": "NGO",
    "name": "Interspecies Money",
    "url": "https://interspecies.money/",
    "logo": "https://interspecies.money/img/interspecies-money-logo_black.png",
    "image": "https://interspecies.money/img/231219_og-image.png",
    "description": "Interspecies Money seeks to give wild animals, trees, and other species the ability to hold and spend money in a trusted and divisible way in order to improve their life outcomes.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "info@interspecies.money"
    }
  }
)
</script>