<template lang="pug">
.breaking-news-ticker-news
  .breaking-news-ticker-news__item(
    v-for="(item, index) in news"
    :key="index"
    :class="{ 'breaking-news-ticker-news__item--active': index === activeNews }"
    :style="index !== activeNews ? 'display: none' : ''"
  )
    span {{ item.title }}
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue-demi'

export default defineComponent({
  name: 'BreakingNewsTickerNews',
  setup() {
    const { news, activeNews } = inject('root')

    return {
      news,
      activeNews
    }
  }
})
</script>

<style lang="scss">
@import './breaking-news-ticker-news.scss';
</style>
