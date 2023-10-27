<template lang="pug">
transition-group.breaking-news-ticker-news#container(:name="effectName" tag="div" :class="[effectClass]" :style="[effectStyle]")
  .breaking-news-ticker-news__item(
    v-for="(item, index) in news"
    v-show="index === activeNews"
    :key="`key-${index + 1}`"
    :class="{ 'breaking-news-ticker-news__item--active': index === activeNews }"
  )
    span {{ item.title }}
</template>

<script lang="ts">
import {  defineComponent, inject, computed, onMounted } from 'vue-demi'
import { useEffect } from '@/hooks'

export default defineComponent({
  name: 'BreakingNewsTickerNews',
  setup() {
    const { news, activeNews, config } = inject('root')
    const { leftStyle, scrollEffect } = useEffect();
    const effectName = computed(() => config.value.news?.animation?.effect || null)
    const effectClass = computed(() => {
      if(effectName.value) {
        return `breaking-news-ticker-news--${effectName.value}`
      }
    })

    const effectStyle = computed(() => {
      if(effectName.value === 'scroll') {
        return { left: `${leftStyle.value}px`}
      }
    })

    onMounted(() => {

      //scroll
      if(effectName.value === 'scroll') {
        scrollEffect();
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
