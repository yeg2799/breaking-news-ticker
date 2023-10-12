<template lang="pug">
.vue-2-app
  // first
  app-header
  breaking-news-ticker-section
</template>

<script lang="ts">
import Vue from 'vue'

// @ts-ignore
import AppHeader from './components/header/app-header.vue'
import BreakingNewsTickerSection from './components/breaking-news-ticker/breaking-news-ticker-section.vue'
import '../../../src/assets/style/scss/app.scss'

export default Vue.extend({
  components: {
    AppHeader,
    BreakingNewsTickerSection
  }
})
</script>

<style lang="scss">
// @import '../../../src/assets/style/scss/app.scss';
</style>
