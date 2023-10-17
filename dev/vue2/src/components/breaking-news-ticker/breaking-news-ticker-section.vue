<template lang="pug">
.breaking-news-ticker-section
  breaking-news-ticker-root(:news="news" :config="config")
    template(#controls)
      breaking-news-ticker-controls
        template(#prevIcon)
          svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24")
            path(stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentcolor" d="M15 18L9 12L15 6")
        template(#nextIcon)
          svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24")
            path(stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentcolor" d="M9 18L15 12L9 6")
</template>

<script lang="ts">
import Vue from 'vue'

// @ts-ignore
import { BreakingNewsTickerRoot, BreakingNewsTickerControls } from '../../../../../src/components'

export default Vue.extend({
  components: {
    BreakingNewsTickerRoot,
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
