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
import Vue from 'vue'

// @ts-ignore
import {
  BreakingNewsTickerRoot,
  BreakingNewsTickerTitle,
  BreakingNewsTickerNews,
  BreakingNewsTickerControls,
  BreakingNewsTickerButton
} from '../../../../../src/components'

export default Vue.extend({
  components: {
    BreakingNewsTickerRoot,
    BreakingNewsTickerTitle,
    BreakingNewsTickerNews,
    BreakingNewsTickerControls,
    BreakingNewsTickerButton
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
