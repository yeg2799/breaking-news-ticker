<template lang="pug">
.vue-3-app
  app-header
  breaking-news-ticker-section
</template>

<script setup lang="ts">
/* @ts-ignore */
import AppHeader from './components/header/app-header.vue'
import BreakingNewsTickerSection from './components/breaking-news-ticker/breaking-news-ticker-section.vue'
import '../../../src/assets/style/scss/app.scss'
</script>

<style lang="scss">
// @import '../../../src/assets/style/scss/app.scss';
</style>
