<template lang="pug">
.breaking-news-ticker-label(:style="{ 'background-color': labelConfig.bgColor, color: labelConfig.color }")
  span {{ labelConfig.title }}
</template>

<script lang="ts">
import { defineComponent, inject, computed } from 'vue-demi'

export default defineComponent({
  name: 'BreakingNewsTickerLabel',
  setup() {
    const { config } = inject('root')
    const labelConfig = computed(() => config.value.label)

    return {
      labelConfig
    }
  }
})
</script>

<style lang="scss">
@import './breaking-news-ticker-label.scss';
</style>
