<template lang="pug">
transition-group.breaking-news-ticker-news(:name="newsConfig.animation.effect" tag="div")
  .breaking-news-ticker-news__item(
    v-for="(item, index) in news"
    v-show="index === activeNews"
    :key="`key-${index + 1}`"
    :class="{ 'breaking-news-ticker-news__item--active': index === activeNews }"
  )
    span {{ item.title }}
</template>

<script lang="ts">
import { defineComponent, inject, computed } from 'vue-demi'

export default defineComponent({
  name: 'BreakingNewsTickerNews',
  setup() {
    const { news, activeNews, config } = inject('root')
    const newsConfig = computed(() => config.value.news)

    return {
      news,
      activeNews,
      newsConfig
    }
  }
})
</script>

<style lang="scss">
@import './breaking-news-ticker-news.scss';
</style>
