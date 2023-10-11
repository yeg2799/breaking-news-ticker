<template lang="pug">
.breaking-news-ticker-title
  .breaking-news-ticker__title {{ title }}
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'

export default defineComponent({
  name: 'BreakingNewsTickerTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {}
})
</script>

<style lang="scss">
@import './breaking-news-ticker-title.scss';
</style>
