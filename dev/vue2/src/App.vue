<template lang="pug">
#app
  VueBreakingNewsTicker
</template>

<script lang="ts">
import Vue from 'vue'

// @ts-ignore
import VueBreakingNewsTicker from '../../../src/app.vue'

export default Vue.extend({
  components: {
    VueBreakingNewsTicker
  }
})
</script>

<style lang="scss">
@import '../../../src/app.scss';
</style>
