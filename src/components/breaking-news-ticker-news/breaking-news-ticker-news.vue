<template lang="pug">
.breaking-news-ticker-news
  template(v-if="isMultiple")
    .breaking-news-ticker-news__item(v-for="i in 5" :key="i") {{ item }}
  template(v-else)
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
    },
    isMultiple: {
      type: Boolean,
      default: false
    }
  },
  setup() {}
})
</script>

<style lang="scss">
@import './breaking-news-ticker-news.scss';
</style>
