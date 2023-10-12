<template lang="pug">
.breaking-news-ticker-section
  breaking-news-ticker-root
    template(#title)
      breaking-news-ticker-title(title="Son Dakika")
    template(#news)
      breaking-news-ticker-news(item="Şok Şok Şok")
    template(#controls)
      breaking-news-ticker-controls
</template>

<script setup lang="ts">
/* @ts-ignore */
import {
  BreakingNewsTickerRoot,
  BreakingNewsTickerTitle,
  BreakingNewsTickerNews,
  BreakingNewsTickerControls
} from '../../../../../src/components'
</script>

<style lang="scss">
@import './breaking-news-ticker-section.scss';
</style>
