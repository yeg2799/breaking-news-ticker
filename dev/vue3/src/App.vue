<template lang="pug">
.vue-3-app
  app-header
  breaking-news-ticker-section(:news="breakingNews.news" :config="breakingNews.config")
</template>

<script lang="ts">
/* @ts-ignore */
import { defineComponent } from 'vue'
import AppHeader from './components/header/app-header.vue'
import BreakingNewsTickerSection from './components/breaking-news-ticker/breaking-news-ticker-section.vue'
import { BreakingNewsMocks } from '../../../mock/breaking-news.mock'
import '../../../src/assets/style/scss/app.scss'

export default defineComponent({
  components: {
    AppHeader,
    BreakingNewsTickerSection
  },
  setup() {
    const breakingNews = {
      news: BreakingNewsMocks,
      config: {
        rtl: false,
        borderColor: '#EF7B7B',
        label: {
          title: 'Breaking News',
          bgColor: '#EF7B7B',
          color: '#fff'
        },
        news: {
          animation: {
            effect: 'slide-down'
          }
        },
        navigation: {
          autoPlay: true,
          duration: 5000,
          isVisible: true,
          bgColor: '#f6f6f6'
        }
      }
    }

    return {
      breakingNews
    }
  }
})
</script>

<style lang="scss">
// @import '../../../src/assets/style/scss/app.scss';
</style>
