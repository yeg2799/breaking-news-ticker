<template lang="pug">
.breaking-news-ticker-controls
  template(v-if="isCustomIcon")
    slot.breaking-news-ticker-controls--button.breaking-news-ticker-controls--left-button(name="left")
    //- slot.breaking-news-ticker-controls--button.breaking-news-ticker-controls--mid-button(name="mid")
    slot.breaking-news-ticker-controls--button.breaking-news-ticker-controls--right-button(name="right")
  template(v-else)
    button.breaking-news-ticker-controls--button.breaking-news-ticker-controls--left-button(
      :disabled="isFirstNews"
      @click="handleClicked('prev')"
    ) prev
    //- button.breaking-news-ticker-controls--button.breaking-news-ticker-controls--mid-button(@click="handleClicked('pause')") pause
    button.breaking-news-ticker-controls--button.breaking-news-ticker-controls--right-button(
      :disabled="isLastNews"
      @click="handleClicked('next')"
    ) next
</template>

<script lang="ts">
import { defineComponent, inject, computed } from 'vue-demi'

export default defineComponent({
  name: 'BreakingNewsTickerControls',
  props: {
    isCustomIcon: {
      type: Boolean,
      default: false
    }
  },

  setup() {
    const { setActiveNews, activeNews, news } = inject('root')
    console.log(activeNews)
    const isFirstNews = computed(() => activeNews.value === 0)
    const isLastNews = computed(() => activeNews.value === news.value.length - 1)

    const handleClicked = (process: '') => {
      setActiveNews(process)
    }

    return {
      isFirstNews,
      isLastNews,
      activeNews,
      handleClicked
    }
  }
})
</script>

<style lang="scss">
@import './breaking-news-ticker-controls.scss';
</style>
