<template>
    <main class="w-full flex-center flex-col bg-black overflow-hidden fade-in" >
        <nav class="fixed w-full top-0 left-0 flex-center z-40 transition-all duration-500 bg-gradient-to-t from-transparent to-black" :class="{ '-translate-y-full': !open}">
            <div class="flex-center max-w-[1280px] h-14 lg:h-20 px-4 w-full">
                <p class="text-white mr-auto">Interspecies Money</p><a class="cta" href="mailto:info@interspecies.money">get in touch</a>
            </div>
        </nav>
        <slot></slot>
        <footer class="w-full flex-center"></footer>
    </main>
</template>
<style>
</style>
<script setup>
const open = ref(false);
const scrollY = ref(0)
onMounted(() => {
  document.addEventListener('scroll', () => {
    open.value = (window.scrollY < scrollY.value)
    scrollY.value = window.scrollY
  })
})
</script>