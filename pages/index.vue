
<template>
  <!--<img v-if="desktopdebug" class="absolute opacity-50 z-50 pointer-events-none left-0 w-full top-0" src="/img/tmp/desktop.png"/>
  <img v-if="mobiledebug"  class="absolute opacity-50 z-50 pointer-events-none left-0 w-full top-0" src="/img/tmp/mobile.png"/>-->
  <div class="h-[calc(100dvh)] w-full flex-center flex-col bg-red relative">
    <div class="absolute top-0 left-0 w-full h-full flex-center"><BgImage src="1.png" /></div>
    <h1 class="hero mix-blend-difference m-auto max-lg:pt-[1.5em] relative" v-html="$md(data.title)"></h1>
    <div class="flex-center h-14 lg:h-16 w-full px-main">
      <a href="#more" class="cta z-30 lg:mt-2.5 lg:mb-auto" v-html="$md(data.more)"></a>
      <a class="cta z-30 ml-auto lg:hidden" href="mailto:info@interspecies.money" v-html="$md(data.contact)"></a>
    </div>
  </div>
  <div class="w-full flex-center page pt-[66px] lg:pt-44 z-10" id="more">
    <h2 class="max-w-[852px] whitespace-pre-line" v-html="$md(data.intro)">
    </h2>
  </div>

  <div class="w-full flex-center flex-col relative">
    <!--<div class="absolute left-0 w-full h-full flex-center top-[-64px] lg:top-[30px] pointer-events-none"></div>-->
    <div class="page section max-lg:max-w-[200px] text-center z-10 mt-[140px] lg:mt-[300px]" v-html="$md(data.section1.pre)"></div>
    <h1 class="page lg:my-[280px] my-[140px] text-center max-w-[14em] max-lg:max-w-[16rem] lg:h-[2.5em] relative"  >
      <span class="z-10 relative mix-blend-difference" v-html="$md(data.section1.title)"></span><a href="https://www.un.org/sustainabledevelopment/blog/2019/05/nature-decline-unprecedented-report/" target="_blank" class="z-10 relative text-[14px] lg:text-[24px] inline-block -translate-y-[0.5em]  mix-blend-difference">↗</a>
      <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-screen">
        <BgImage src="2.png" />
      </div>
    </h1>
    <p class=" page max-w-[672px] z-10 mix-blend-difference" v-html="$md(data.section1.body)"></p>
  </div>

  <div class="w-full flex-center flex-col relative">
    <!--<div class="absolute top-[-130px] lg:top-[-34px] left-0 w-full h-full flex-center pointer-events-none"><BgImage src="3.png" /></div>-->
    <div class="section max-lg:max-w-[166px] text-center z-10 mt-[140px] lg:mt-[300px] page" v-html="$md(data.section2.pre)"></div>
    <div class="relative lg:my-[280px] my-[140px] page flex-center">
      <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-screen" >
        <BgImage src="3.png" />
      </div>
      <h1 class="text-center mix-blend-difference max-w-[18em] z-10" v-html="$md(data.section2.title)"></h1>
    </div>
    <p class="max-w-[672px] z-10 max-lg:mt-1 page" v-html="$md(data.section2.body)"></p>
  </div>
  <div class=" w-full page flex-center flex-col">
    <div class="section mt-[140px] lg:mt-[300px] mb-[26px] lg:mb-12 z-10" v-html="$md(data.section4.pre)"></div>
    <div class="h-px w-full max-w-[1064px] bg-white max-xl:hidden z-10"></div>
    <Carousel class="max-lg:ml-14 w-full max-xl:border-t border-white max-w-[1180px] z-10 xl:translate-x-[58px] lg:pointer-events-none" :breakpoints="breakpoints">
      <Slide v-for="step,i in data.section4.steps" :key="i">
        <div class="h-32 text-white font-bold flex w-full">
          <p class="mt-2">{{ (i + 1) }}</p>
          <p class="flex-1 mt-[28px] lg:mt-[34px] ml-2.5 lg:ml-2 text-left max-lg:pr-5">{{ $md(step) }}</p>
        </div>
      </Slide>
      <template #addons>
        <!--<Navigation />-->
      </template>
    </Carousel>
  </div>
  
  <div class="flex-center flex-col relative bg-red">
    <!--<div class="lg:hidden absolute pt-96 left-0 w-full h-full flex-center pointer-events-none  -translate-y-[470px]">
      <BgImage src="5.png" />
    </div>-->
    <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-screen">
        <BgImage src="4.png" />
      </div>
    <div class="page section z-10 mt-[80px] lg:mt-[160px]" v-html="$md(data.section3.pre)"></div>
    <p class="page mt-8 lg:mt-12 max-w-[672px] z-10" v-html="$md(data.section3.body)"></p>
    <a class="cta mt-6 lg:mt-20 z-10 relative" href="mailto:info@interspecies.money" v-html="$md(data.contact)"></a>
  </div>

  <div class="w-full page flex-center flex-col pb-16 z-10">
    <div class="caption mt-[204px] lg:mt-[364px]">{{ data.copyright.replaceAll('<year>', new Date().getFullYear()) }}</div>
    <div class="caption mt-4 lg:mt-6 text-center" v-html="$md(data.credits)"></div>
  </div>
</template>
<script setup>
const { data } = await useAsyncData('posts', () => {
  return queryContent('/home').findOne()
})
const route = useRoute()
// const desktopdebug = ref(route.fullPath.indexOf('=desktop') >=0)
// const mobiledebug = ref(route.fullPath.indexOf('=mobile') >=0)
const breakpoints = ref({

      0: {
        itemsToShow: 2.3,
        snapAlign: 'left'
      },
      // 700px and up
      450: {
        itemsToShow: 3.5,
        snapAlign: 'left'
      },
      600: {
        itemsToShow: 3.5,
        snapAlign: 'left'
      },
      // 1024 and up
      1024: {
        itemsToShow: 5
      },
    })
/*
useHead({
  title: 'Home',
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ]
});
*/

</script>
<style>
.carousel__viewport {
  overflow: visible;
}
</style>