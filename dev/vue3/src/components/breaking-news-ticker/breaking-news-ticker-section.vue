<template lang="pug">
.breaking-news-ticker-section
  breaking-news-ticker-root
    template(#title)
      breaking-news-ticker-title(title="Son Dakika")
    template(#news)
      breaking-news-ticker-news(item="Şok Şok Şok")
    template(#controls)
      breaking-news-ticker-controls(isCustomIcon)
        template(#left)
          breaking-news-ticker-button(name="prev1")
        template(#mid)
          breaking-news-ticker-button(name="pause1")
        template(#right)
          breaking-news-ticker-button(name="next")
</template>

<script setup lang="ts">
/* @ts-ignore */
import {
  BreakingNewsTickerRoot,
  BreakingNewsTickerTitle,
  BreakingNewsTickerNews,
  BreakingNewsTickerControls,
  BreakingNewsTickerButton
} from '../../../../../src/components'

const prevItem = () => {
  console.log('clicked Prev Button')
}
</script>

<style lang="scss">
@import './breaking-news-ticker-section.scss';
</style>
