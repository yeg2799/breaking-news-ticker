<template lang="pug">
.breaking-news-ticker-news
  .breaking-news-ticker-news__item {{ item }}
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'

export default defineComponent({
  name: 'BreakingNewsTickerNews',
  props: {
    item: {
      type: String,
      required: true
    }
  },
  setup() {}
})
</script>

<style lang="scss">
@import './breaking-news-ticker-news.scss';
</style>
