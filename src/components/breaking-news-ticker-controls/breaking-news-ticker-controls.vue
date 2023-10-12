<template lang="pug">
.breaking-news-ticker-controls
  template(v-if="isCustomIcon")
    slot.breaking-news-ticker-controls--button.breaking-news-ticker-controls--left-button(name="left")
    slot.breaking-news-ticker-controls--button.breaking-news-ticker-controls--mid-button(name="mid")
    slot.breaking-news-ticker-controls--button.breaking-news-ticker-controls--right-button(name="right")
  template(v-else)
    breaking-news-ticker-button.breaking-news-ticker-controls--button.breaking-news-ticker-controls--left-button(name="prev")
    breaking-news-ticker-button.breaking-news-ticker-controls--button.breaking-news-ticker-controls--mid-button(name="pause")
    breaking-news-ticker-button.breaking-news-ticker-controls--button.breaking-news-ticker-controls--right-button(name="next")
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
    isCustomIcon: {
      type: Boolean,
      default: false
    }
  },

  setup() {}
})
</script>

<style lang="scss">
@import './breaking-news-ticker-controls.scss';
</style>
