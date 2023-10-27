<template lang="pug">
transition-group#container.breaking-news-ticker-news(:name="effectName" tag="div" :class="[effectClass]" :style="[effectStyle]")
  .breaking-news-ticker-news__item(
    v-for="(item, index) in news"
    v-show="index === activeNews"
    :key="`key-${index + 1}`"
    :class="{ 'breaking-news-ticker-news__item--active': index === activeNews }"
  )
    span {{ item.title }}
</template>

<script lang="ts">
import { defineComponent, inject, computed, onMounted } from 'vue-demi'
import { useEffect } from '@/hooks/index.ts'
import { effectEnum } from '@/enums/index.ts'

export default defineComponent({
  name: 'BreakingNewsTickerNews',
  setup() {
    const { news, activeNews, config } = inject('root')
    const { leftStyle, scrollEffect } = useEffect()
    const effectName = computed(() => config.value.news?.animation?.effect || null)
    const effectClass = computed(() => {
      if (effectName.value) {
        return `breaking-news-ticker-news--${effectName.value}`
      }
    })

    const effectStyle = computed(() => {
      if (effectName.value === effectEnum.SCROLL) {
        return { left: `${leftStyle.value}px` }
      }
    })

    onMounted(() => {
      //scroll
      if (effectName.value === effectEnum.SCROLL) {
        scrollEffect()
      }
    })

    return {
      news,
      activeNews,
      effectName,
      effectClass,
      effectStyle
    }
  }
})
</script>

<style lang="scss">
@import './breaking-news-ticker-news.scss';
</style>
