<template lang="pug">
#app
  breaking-news-ticker-root
    template(#title)
      breaking-news-ticker-title(title="Son Dakika")
    template(#news)
      breaking-news-ticker-item(item="Şok Şok Şok")
</template>

<script setup lang="ts">
/* @ts-ignore */
import { BreakingNewsTickerRoot, BreakingNewsTickerTitle, BreakingNewsTickerItem } from '../../../../../src/components'
</script>

<style lang="scss">
// @import '../../../src/app.scss';
</style>
