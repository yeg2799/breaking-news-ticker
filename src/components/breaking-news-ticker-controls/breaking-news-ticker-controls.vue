<template lang="pug">
.breaking-news-ticker-controls
  button.breaking-news-ticker-controls--button.breaking-news-ticker-controls--left-button(
    :disabled="isFirstNews"
    :style="{ backgroundColor: controlsConfig.bgColor }"
    @click="handleClicked(processEnum.PREV)"
  )
    svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24")
      path(stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentcolor" d="M15 18L9 12L15 6")
  button.breaking-news-ticker-controls--button.breaking-news-ticker-controls--right-button(
    :disabled="isLastNews"
    :style="{ backgroundColor: controlsConfig.bgColor }"
    @click="handleClicked(processEnum.NEXT)"
  )
    svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24")
      path(stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentcolor" d="M9 18L15 12L9 6")
</template>

<script lang="ts">
import { defineComponent, inject, computed, onMounted } from 'vue-demi'
import { processEnum } from '@/enums/index.ts'

export default defineComponent({
  name: 'BreakingNewsTickerControls',
  setup() {
    const { setActiveNews, activeNews, news, resetActiveNews, config } = inject('root')
    const controlsConfig = computed(() => config.value.controls)
    const isFirstNews = computed(() => activeNews.value === 0)
    const isLastNews = computed(() => activeNews.value === news.value.length - 1)
    let interval;

    const handleClicked = async (process: '') => {
      await clearInterval(interval);

      await setActiveNews(process)

      await createInterval();
    }

    onMounted(() => {
      // autoPlay
      if (controlsConfig.value.autoPlay) {
        createInterval();
      }
    })

    const createInterval = () => {
      interval = setInterval(() => {
        if (isLastNews.value) {
          resetActiveNews()
        } else {
          handleClicked(processEnum.NEXT)
        }
      }, controlsConfig.value.duration || 2000)
    }

    return {
      isFirstNews,
      isLastNews,
      activeNews,
      handleClicked,
      processEnum,
      controlsConfig
    }
  }
})
</script>

<style lang="scss">
@import './breaking-news-ticker-controls.scss';
</style>
