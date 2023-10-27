<template lang="pug">
.breaking-news-ticker-section
  breaking-news-ticker(:news="news" :config="config")
</template>

<script lang="ts">
import Vue from 'vue'

// @ts-ignore
import { BreakingNewsTicker } from '../../../../../src/components'

export default Vue.extend({
  components: {
    BreakingNewsTicker
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
