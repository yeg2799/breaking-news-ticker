<template lang="pug">
.breaking-news-ticker-section
  breaking-news-ticker(:news="news" :config="config")
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'
/* @ts-ignore */
// import BreakingNewsTicker from 'v-breaking-news-ticker'
// import '/node_modules/v-breaking-news-ticker/dist/vue3/breaking-news-ticker.min.css'
import BreakingNewsTicker from '../../../../../src/components/breaking-news-ticker/breaking-news-ticker.vue'
export default defineComponent({
  components: {
    BreakingNewsTicker,
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
