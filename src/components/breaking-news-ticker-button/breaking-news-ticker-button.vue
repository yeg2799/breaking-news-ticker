<template lang="pug">
.breaking-news-ticker-button
  span(@click="handleClicked") {{ name }}
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
  },
  // eslint-disable-next-line vue/no-setup-props-destructure
  setup(_, { emit }) {
    const handleClicked = () => {
      console.log('handleClicked')
      emit('clicked')
    }

    return {
      handleClicked
    }
  }
})
</script>

<style lang="scss">
@import './breaking-news-ticker-button.scss';
</style>
