<template lang="pug">
.breaking-news-ticker-section
  breaking-news-ticker-root(:news="news" :config="config")
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'
/* @ts-ignore */
// import BreakingNewsTickerRoot from 'v-breaking-news-ticker'
// import '/node_modules/v-breaking-news-ticker/dist/vue3/breaking-news-ticker.min.css'
import BreakingNewsTickerRoot from '../../../../../src/components/breaking-news-ticker-root/breaking-news-ticker-root.vue'
export default defineComponent({
  components: {
    BreakingNewsTickerRoot,
  },
  props: {
    news: {
      type: Array,
      required: true
    },
    config: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="scss">
@import './breaking-news-ticker-section.scss';
</style>
