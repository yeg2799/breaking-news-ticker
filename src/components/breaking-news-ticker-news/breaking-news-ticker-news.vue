<template lang="pug">
.breaking-news-ticker-news
  .breaking-news-ticker-news__item(v-for="i in news" :key="i")
    span {{ i }}
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue-demi'

export default defineComponent({
  name: 'BreakingNewsTickerNews',
  setup() {
    const { news } = inject('root')
    console.log(inject('root'))

    return {
      news
    }
  }
})
</script>

<style lang="scss">
@import './breaking-news-ticker-news.scss';
</style>
