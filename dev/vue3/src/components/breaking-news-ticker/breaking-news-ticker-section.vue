<template lang="pug">
.breaking-news-ticker-section
  breaking-news-ticker-root(:news="news" :config="config")
    template(#title)
      breaking-news-ticker-title(title="Son Dakika")
    template(#news)
      breaking-news-ticker-news(item="Şok Şok Şok")
    template(#controls)
      breaking-news-ticker-controls
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'
/* @ts-ignore */
import {
  BreakingNewsTickerRoot,
  BreakingNewsTickerTitle,
  BreakingNewsTickerNews,
  BreakingNewsTickerControls
} from '../../../../../src/components'

export default defineComponent({
  components: {
    BreakingNewsTickerRoot,
    BreakingNewsTickerTitle,
    BreakingNewsTickerNews,
    BreakingNewsTickerControls
  },
  props: {
    news: {
      type: Array,
      required: true
    },
    config: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="scss">
@import './breaking-news-ticker-section.scss';
</style>
