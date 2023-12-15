<template>
    <div class="h-[520px] lg:h-[1024px] w-full" ref="container" :style="'transform:translateY(' + (-translateY) + 'px) scale(' + (1 + (0.0002 * Math.max(0, - translateY))) + ')'">
        <div class="absolute top-0 left-0 w-full h-16 lg:h-60 z-10 bg-gradient-to-t from-transparent to-black"></div>
        <NuxtImg  :src="'/img/bg/mobile/'  + src" class="lg:hidden object-cover w-full h-full" />
        <NuxtImg :src="'/img/bg/desktop/' + src" class="max-lg:hidden object-cover w-full h-full" />
        <div class="absolute bottom-0 left-0 w-full h-16 lg:h-60 z-10 bg-gradient-to-t from-black to-transparent" ></div>
    </div>
</template>
<script setup>
const props = defineProps(['src'])
const container = ref(null)
const translateY = ref(0)
const route = useRoute()
const parallax = ref(route.fullPath.indexOf('parallax') >=0)
onMounted(() => {
    const update = e => {
        const y = container.value.getBoundingClientRect().top
        const h = container.value.offsetHeight
        if(parallax.value) translateY.value = - (h/8) * Math.min(1000.5, Math.max(-1000.5, (window.scrollY - y + h/2) / h))
    }
    document.addEventListener('scroll', update)
    update()
})
</script>