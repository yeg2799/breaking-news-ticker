<template lang="pug">
.breaking-news-ticker-item
  .breaking-news-ticker-item__news {{ item }}
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'

export default defineComponent({
  name: 'BreakingNewsTickerItem',
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
@import './breaking-news-ticker-item.scss';
</style>
