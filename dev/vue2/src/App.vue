<template lang="pug">
#app
  // first
  breaking-news-ticker-section
</template>

<script lang="ts">
import Vue from 'vue'

// @ts-ignore
import BreakingNewsTickerSection from './components/breaking-news-ticker/breaking-news-ticker-section.vue'

export default Vue.extend({
  components: {
    BreakingNewsTickerSection
  }
})
</script>

<style lang="scss">
// @import '../../../src/app.scss';
</style>
