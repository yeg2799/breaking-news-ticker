<template lang="pug">
.breaking-news-ticker(:dir="dirAttr" :style="{ 'border-color': config.borderColor }")
  breaking-news-ticker-label
  .breaking-news-ticker__wrapper
    breaking-news-ticker-news
  breaking-news-ticker-navigation
</template>

<script lang="ts">
import { defineComponent, provide, computed } from 'vue-demi'
import { useRoot } from '@/hooks/index.ts'
import BreakingNewsTickerLabel from '../breaking-news-ticker-label/breaking-news-ticker-label.vue'
import BreakingNewsTickerNews from '../breaking-news-ticker-news/breaking-news-ticker-news.vue'
import BreakingNewsTickerNavigation from '../breaking-news-ticker-navigation/breaking-news-ticker-navigation.vue'

export default defineComponent({
  name: 'BreakingNewsTicker',
  components: {
    BreakingNewsTickerLabel,
    BreakingNewsTickerNews,
    BreakingNewsTickerNavigation
  },
  props: {
    news: {
      type: Array,
      required: true
    },
    config: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const { setNews, setConfig, setActiveNews, news, repeatedNewsData, config, activeNews, resetActiveNews } = useRoot()

    setConfig(props.config)
    // Provide
    provide('root', {
      setNews,
      setConfig,
      setActiveNews,
      resetActiveNews,
      news,
      repeatedNewsData,
      config,
      activeNews
    })

    if (props.news) {
      setNews(props.news)
    } else {
      console.error('please add news props')
    }

    const dirAttr = computed(() => {
      if (config.value?.rtl) {
        return 'rtl'
      }
    })

    return {
      dirAttr
    }
  }
})
</script>

<style lang="scss">
@import './breaking-news-ticker.scss';
</style>
