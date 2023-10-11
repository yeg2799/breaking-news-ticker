<template lang="pug">
.breaking-news-ticker-section
  breaking-news-ticker-root
    template(#title)
      breaking-news-ticker-title(title="Son Dakika")
    template(#news)
      breaking-news-ticker-news(item="Şok Şok Şok")
</template>

<script setup lang="ts">
/* @ts-ignore */
import { BreakingNewsTickerRoot, BreakingNewsTickerTitle, BreakingNewsTickerNews } from '../../../../../src/components'
</script>

<style lang="scss">
// @import '../../../src/app.scss';
</style>
