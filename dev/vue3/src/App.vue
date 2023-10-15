<template lang="pug">
.vue-3-app
  app-header
  breaking-news-ticker-section(:news="breakingNews.news" :config="breakingNews.config")
</template>

<script setup lang="ts">
/* @ts-ignore */
import AppHeader from './components/header/app-header.vue'
import BreakingNewsTickerSection from './components/breaking-news-ticker/breaking-news-ticker-section.vue'
import { BreakingNewsMocks } from '../../../mock/breaking-news.mock'
import '../../../src/assets/style/scss/app.scss'

const breakingNews = {
  news: BreakingNewsMocks,
  config: {
    rtl: false,
    borderColor: '#EF7B7B',
    label: {
      title: 'Son Dakika',
      bgColor: '#EF7B7B',
      color: '#fff'
    }
  }
}
</script>

<style lang="scss">
// @import '../../../src/assets/style/scss/app.scss';
</style>
