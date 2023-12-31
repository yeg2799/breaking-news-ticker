<template lang="pug">
.breaking-news-ticker-navigation(v-if="isVisibleNavigation")
  button.breaking-news-ticker-navigation--button.breaking-news-ticker-navigation--left-button(
    :disabled="isFirstNews && !isLoop"
    :style="{ backgroundColor: navigationConfig.bgColor }"
    @click="handleClicked(processEnum.PREV)"
  )
    svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24")
      path(stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentcolor" d="M15 18L9 12L15 6")
  button.breaking-news-ticker-navigation--button.breaking-news-ticker-navigation--right-button(
    :disabled="isLastNews && !isLoop"
    :style="{ backgroundColor: navigationConfig.bgColor }"
    @click="handleClicked(processEnum.NEXT)"
  )
    svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24")
      path(stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentcolor" d="M9 18L15 12L9 6")
</template>

<script lang="ts">
import { defineComponent, inject, computed, onMounted } from 'vue-demi'
import { processEnum, effectEnum } from '@/enums/index.ts'

export default defineComponent({
  name: 'BreakingNewsTickerNavigation',
  setup() {
    const { setActiveNews, activeNews, news, resetActiveNews, config } = inject('root')

    const navigationConfig = computed(() => config.value.navigation)
    const isLoop = computed(() => config.value.loop || false)
    const isFirstNews = computed(() => activeNews.value === 0)
    const isLastNews = computed(() => activeNews.value === news.value.length - 1)
    const isScrollEffect = computed(() => config.value.news?.animation?.effect === effectEnum.SCROLL)
    const isVisibleNavigation = computed(() => !isScrollEffect.value && navigationConfig.value.isVisible)

    let interval

    const handleClicked = async (process: '') => {
      if (isLoop.value) {
        loopProcess(process)
      } else {
        await clearInterval(interval)
        await setActiveNews(process)
        await createInterval()
      }
    }

    onMounted(() => {
      // autoPlay
      if (navigationConfig.value.autoPlay && !isScrollEffect.value) {
        createInterval()
      }
    })

    const createInterval = () => {
      interval = setInterval(() => {
        if (isLastNews.value) {
          resetActiveNews()
        } else {
          handleClicked(processEnum.NEXT)
        }
      }, navigationConfig.value.duration || 5000)
    }

    const loopProcess = process => {
      if (process === processEnum.NEXT && isLastNews.value) {
        resetActiveNews()
      } else {
        setActiveNews(process)
      }
    }

    return {
      isFirstNews,
      isLastNews,
      activeNews,
      handleClicked,
      processEnum,
      navigationConfig,
      isLoop,
      isVisibleNavigation
    }
  }
})
</script>

<style lang="scss">
@import './breaking-news-ticker-navigation.scss';
</style>
