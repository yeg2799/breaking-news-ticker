<template lang="pug">
#app
  breaking-news-ticker-root
    template(#title)
      breaking-news-ticker-title(title="Son Dakika")
    template(#news)
      breaking-news-ticker-item(item="Şok Şok Şok")
</template>

<script lang="ts">
import Vue from 'vue'

// @ts-ignore
import { BreakingNewsTickerRoot, BreakingNewsTickerTitle, BreakingNewsTickerItem } from '../../../../../src/components'

export default Vue.extend({
  components: {
    BreakingNewsTickerRoot,
    BreakingNewsTickerTitle,
    BreakingNewsTickerItem
  }
})
</script>

<style lang="scss">
// @import '../../../src/app.scss';
</style>
