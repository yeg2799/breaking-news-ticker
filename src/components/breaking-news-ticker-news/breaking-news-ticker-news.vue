<template lang="pug">
transition-group#container.breaking-news-ticker-news(:name="effectName" tag="div" :class="[effectClass]" :style="[effectStyle]")
  template(v-if="effectName === effectEnum.SCROLL")
    .breaking-news-ticker-news__item(v-for="(item, index) in repeatedNewsData" :key="`key-${index + 1}`" :class="[dublicateClass(index)]")
      span {{ item.title }}
  template(v-else-if="effectName !== effectEnum.SCROLL")
    .breaking-news-ticker-news__item(
      v-for="(item, index) in news"
      v-show="index === activeNews"
      :key="`key-${index + 1}`"
      :class="[activeClass(index, activeNews)]"
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
    const { news, repeatedNewsData, activeNews, config } = inject('root')
    const { directionStyle, scrollEffect } = useEffect()

    const effectName = computed(() => config.value.news?.animation?.effect || null)
    const effectClass = computed(() => {
      if (effectName.value) {
        return `breaking-news-ticker-news--${effectName.value}`
      }
    })
    const isRtl = computed(() => config.value.rtl || false)

    const effectStyle = computed(() => {
      if (effectName.value === effectEnum.SCROLL) {
        if (isRtl.value) {
          return { right: `${directionStyle.value}px` }
        } else {
          return { left: `${directionStyle.value}px` }
        }
      }
    })

    const activeClass = (index, activeNews) => {
      return { 'breaking-news-ticker-news__item--active': index === activeNews }
    }

    const dublicateClass = index => {
      return { 'breaking-news-ticker-news__dublicate-item': index > news.value.length - 1 }
    }

    onMounted(() => {
      //scroll
      if (effectName.value === effectEnum.SCROLL) {
        scrollEffect()
      }
    })

    return {
      news,
      repeatedNewsData,
      activeNews,
      effectName,
      effectClass,
      effectStyle,
      activeClass,
      dublicateClass,
      effectEnum
    }
  }
})
</script>

<style lang="scss">
@import './breaking-news-ticker-news.scss';
</style>
