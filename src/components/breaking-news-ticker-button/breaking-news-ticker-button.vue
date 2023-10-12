<template lang="pug">
.breaking-news-ticker-button
  span {{ name }}
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'

export default defineComponent({
  name: 'BreakingNewsTickerControls',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss">
@import './breaking-news-ticker-button.scss';
</style>
