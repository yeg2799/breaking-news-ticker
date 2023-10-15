<template lang="pug">
.vue-2-app
  // first
  app-header
  breaking-news-ticker-section(:news="breakingNews.news" :config="breakingNews.config")
</template>

<script lang="ts">
import Vue from 'vue'

// @ts-ignore
import AppHeader from './components/header/app-header.vue'
import BreakingNewsTickerSection from './components/breaking-news-ticker/breaking-news-ticker-section.vue'
import '../../../src/assets/style/scss/app.scss'
import { BreakingNewsMocks } from '../../../mock/breaking-news.mock'

export default Vue.extend({
  components: {
    AppHeader,
    BreakingNewsTickerSection
  },
  data() {
    return {
      breakingNews: {
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
    }
  }
})
</script>

<style lang="scss">
// @import '../../../src/assets/style/scss/app.scss';
</style>
