<template>
  <div
    class="h-[520px] lg:h-[1024px] w-full pointer-events-none"
    ref="container"
  >
    <!--<span class="absolute z-50 text-green-400">{{ sy}}</span>-->
    <div class="w-full h-full relative" :style="'transform:translateY(' + translateY + 'px) scale(' + scale + ')'" >
      <div class="absolute top-0 left-0 w-full h-16 lg:h-60 z-10 bg-gradient-to-t from-transparent to-black" />
      <NuxtImg
        format="webp"
        sizes="1024px"
        :src="'/img/bg/mobile/' + src"
        quality="100"
        class="lg:hidden object-cover w-full h-full"
      />
      <NuxtImg
        format="webp"
        sizes="md:1920px lg:2440"
        :src="'/img/bg/desktop/' + src"
        quality="100"
        class="max-lg:hidden object-cover w-full h-full"
      />
      <div class="absolute bottom-0 left-0 w-full h-16 lg:h-60 z-10 bg-gradient-to-t from-black to-transparent" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['src'])
const container = ref(null)
const translateY = ref(0)
const scale = ref(1)
const sy = ref(0)
const ty = ref(0)
const route = useRoute()
const parallax = ref(route.fullPath.indexOf('parallax') >= 0)
onMounted(() => {
  const update = e => {
    // if(route.query.parallax) {
    const y = container.value.getBoundingClientRect().top
    const h = container.value.offsetHeight
    const alpha = window.innerWidth > 1024 ? 0.4 * 0.3 : 0.2 * 0.5
    const p = isNaN(route.query.parallax) ? 1 : route.query.parallax
    const t = (window.innerHeight * 0.5 - (y + h * 0.5)) * (alpha * p)
    sy.value = t
    ty.value = y
    translateY.value = t
    // }
    // if(parallax.value) translateY.value = - (h/8) * Math.min(1000.5, Math.max(-1000.5, (window.scrollY - y + h/2) / h))
  }
  document.addEventListener('scroll', update)
  update()
})
</script>
