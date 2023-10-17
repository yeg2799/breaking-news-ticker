<template lang="pug">
.breaking-news-ticker-root(:dir="dirAttr" :style="{ 'border-color': config.borderColor }")
  breaking-news-ticker-label
  breaking-news-ticker-news
  slot(name="controls")
</template>

<script lang="ts">
import { defineComponent, provide, computed } from 'vue-demi'
import { useRoot } from '@/hooks/index.ts'
import BreakingNewsTickerLabel from '../breaking-news-ticker-label/breaking-news-ticker-label.vue'
import BreakingNewsTickerNews from '../breaking-news-ticker-news/breaking-news-ticker-news.vue'

export default defineComponent({
  name: 'BreakingNewsTickerRoot',
  components: {
    BreakingNewsTickerLabel,
    BreakingNewsTickerNews
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
    const { setNews, setConfig, setActiveNews, news, config, activeNews, resetActiveNews } = useRoot()
    setConfig(props.config)
    // Provide
    provide('root', {
      setNews,
      setConfig,
      setActiveNews,
      resetActiveNews,
      news,
      config,
      activeNews
    })
    setNews(props.news)

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
@import './breaking-news-ticker-root.scss';
</style>
