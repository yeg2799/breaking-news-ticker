<template lang="pug">
.breaking-news-ticker-controls
  button.breaking-news-ticker-controls--button.breaking-news-ticker-controls--left-button(
    :disabled="isFirstNews"
    @click="handleClicked(processEnum.PREV)"
  )
    slot(name="prevIcon")
  //- button.breaking-news-ticker-controls--button.breaking-news-ticker-controls--mid-button(@click="handleClicked('pause')") pause
  button.breaking-news-ticker-controls--button.breaking-news-ticker-controls--right-button(
    :disabled="isLastNews"
    @click="handleClicked(processEnum.NEXT)"
  )
    slot(name="nextIcon")
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

    const handleClicked = (process: '') => {
      setActiveNews(process)
    }

    onMounted(() => {
      // autoPlay
      if (controlsConfig.value.autoPlay) {
        setInterval(() => {
          if (isLastNews.value) {
            resetActiveNews()
          } else {
            handleClicked(processEnum.NEXT)
          }
        }, controlsConfig.value.duration)
      }
    })

    return {
      isFirstNews,
      isLastNews,
      activeNews,
      handleClicked,
      processEnum
    }
  }
})
</script>

<style lang="scss">
@import './breaking-news-ticker-controls.scss';
</style>
