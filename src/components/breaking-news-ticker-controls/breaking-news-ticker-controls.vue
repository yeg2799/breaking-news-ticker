<template lang="pug">
.breaking-news-ticker-controls
  breaking-news-ticker-button.breaking-news-ticker-controls--button.breaking-news-ticker-controls--prev-button(name="prev")

  breaking-news-ticker-button.breaking-news-ticker-controls--button.breaking-news-ticker-controls--pause-button(name="pause")

  breaking-news-ticker-button.breaking-news-ticker-controls--button.breaking-news-ticker-controls--next-button(name="next")
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'
import BreakingNewsTickerButton from '../breaking-news-ticker-button/breaking-news-ticker-button.vue'

export default defineComponent({
  name: 'BreakingNewsTickerControls',
  components: {
    BreakingNewsTickerButton
  },
  props: {
    item: {
      type: String,
      required: true
    }
  },
  setup() {}
})
</script>

<style lang="scss">
@import './breaking-news-ticker-controls.scss';
</style>
