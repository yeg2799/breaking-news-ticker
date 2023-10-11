<template lang="pug">
.breaking-news-ticker-root
  slot(name="title")
  slot(name="news")
  slot(name="button")
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'

export default defineComponent({
  name: 'BreakingNewsTicker',
  props: {
    isMultiple: {
      type: Boolean,
      default: false
    }
  },
  setup() {}
})
</script>

<style lang="scss">
@import './breaking-news-ticker-root.scss';
</style>
