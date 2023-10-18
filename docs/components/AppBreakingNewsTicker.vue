<template>
  <breaking-news-ticker-root :news="breakingNews.news" :config="breakingNews.config">
    <template #controls>
      <breaking-news-ticker-controls>
        <template #prevIcon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentcolor" d="M15 18L9 12L15 6"></path>
          </svg>
        </template>
        <template #nextIcon>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentcolor" d="M9 18L15 12L9 6"></path>
          </svg>
        </template>
      </breaking-news-ticker-controls>
    </template>
  </breaking-news-ticker-root>
</template>

<script>
import { defineComponent } from 'vue'
import { BreakingNewsTickerRoot, BreakingNewsTickerControls } from 'v-breaking-news-ticker'
import '/node_modules/v-breaking-news-ticker/dist/vue3/breaking-news-ticker.min.css'
import { BreakingNewsMocks } from '../../mock/breaking-news.mock'

export default defineComponent({
  components: {
    BreakingNewsTickerRoot,
    BreakingNewsTickerControls
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
          effect: 'slide-down'
        },
        controls: {
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

<style scoped>
button {
  border: 2px solid #ddd;
  padding: 0.4rem 0.6rem;
}

.v-dropdown-menu ::v-deep(.v-dropdown-menu__container) {
  color: #201e1b !important;
}
</style>
