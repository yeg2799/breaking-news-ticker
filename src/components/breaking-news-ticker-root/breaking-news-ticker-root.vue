<template lang="pug">
.breaking-news-ticker-root(:dir="dirAttr")
  slot(name="title")
  slot(name="news")
  slot(name="controls")
</template>

<script lang="ts">
import { defineComponent, provide, computed } from 'vue-demi'
import { useRoot } from '@/hooks/index.ts'

export default defineComponent({
  name: 'BreakingNewsTickerRoot',
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
    const { setNews, setConfig, setActiveNews, news, config, activeNews } = useRoot()
    setConfig(props.config)
    // Provide
    provide('root', {
      setNews,
      setConfig,
      setActiveNews,
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
