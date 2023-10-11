<template lang="pug">
.vue-breaking-news-ticker
  span breaking news
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue-demi'
import type { BaseClassNameTypes } from '@/types'

export default defineComponent({
  name: 'VueBreakingNewsTicker',
  setup() {
    const baseClassName: BaseClassNameTypes = 'vue-breaking-news-ticker'

    const rootRef = ref(null)

    const state = reactive({
      isActive: false
    })

    const toggle = () => {
      console.info(rootRef.value)
      state.isActive = !state.isActive
    }

    const activeClass = computed(() => {
      if (state.isActive) {
        return `${baseClassName}--active`
      }
    })

    return {
      rootRef,
      state,
      toggle,
      activeClass
    }
  }
})
</script>

<style lang="scss">
@import './app.scss';
</style>
