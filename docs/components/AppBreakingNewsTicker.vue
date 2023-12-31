<template>
  <breaking-news-ticker :news="breakingNews.news" :config="breakingNews.config">
  </breaking-news-ticker>
</template>

<script>
import { defineComponent } from 'vue'
import { BreakingNewsTicker } from 'v-breaking-news-ticker'
import '/node_modules/v-breaking-news-ticker/dist/vue3/breaking-news-ticker.min.css'
import { BreakingNewsMocks } from '../../mock/breaking-news.mock'

export default defineComponent({
  components: {
    BreakingNewsTicker,
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
            effect: 'scroll'
          }
        },
      }
    }

    return {
      breakingNews
    }
  }
})
</script>
