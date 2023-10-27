<template lang="pug">
transition-group.breaking-news-ticker-news#container(:name="newsConfig.animation.effect" tag="div" :class="[effectClass]" :style="[effectStyle]")
  .breaking-news-ticker-news__item(
    v-for="(item, index) in news"
    v-show="index === activeNews"
    :key="`key-${index + 1}`"
    :class="{ 'breaking-news-ticker-news__item--active': index === activeNews }"
  )
    span {{ item.title }}
</template>

<script lang="ts">
import { ref, defineComponent, inject, computed, onMounted } from 'vue-demi'

export default defineComponent({
  name: 'BreakingNewsTickerNews',
  setup() {
    const { news, activeNews, config } = inject('root')
    const newsConfig = computed(() => config.value.news)
    const left = ref(0);
    const effectClass = computed(() => {
      const effectName = newsConfig.value.animation.effect;

      if(effectName) {
        return `breaking-news-ticker-news--${effectName}`
      }
    })

    const effectStyle = computed(() => {
      const effectName = newsConfig.value.animation.effect;

      if(effectName === 'scroll') {
        return { left: `${left.value}px`}
      }
    })

    onMounted(() => {
      setInterval(() => {
        const container = document.getElementById('container');
        const firstChild = document.querySelector('.breaking-news-ticker-news__item');

        const moveToAppendChild = () => {
          container?.appendChild(firstChild)
        }

        if(-left.value < firstChild?.clientWidth) {
          left.value -= 1;
        } else {
          left.value = 0;
          moveToAppendChild()
        }
      },10)
    })

    return {
      news,
      activeNews,
      newsConfig,
      effectClass,
      left,
      effectStyle
    }
  }
})
</script>

<style lang="scss">
@import './breaking-news-ticker-news.scss';
</style>
