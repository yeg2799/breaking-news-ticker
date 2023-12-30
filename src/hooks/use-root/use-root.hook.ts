import { reactive, computed } from 'vue-demi'
import { processEnum } from '@/enums/index.ts'

export default () => {
  const state = reactive({
    news: [],
    repeatedNewsData: [],
    config: null,
    activeNews: 0
  })

  //Methods
  const setNews = (news: []) => {
    state.news = news
    state.repeatedNewsData = [...news, ...news]
  }

  const setConfig = (config: {}) => {
    state.config = config
  }

  const setActiveNews = (process: string) => {
    switch (process) {
      case processEnum.PREV:
        state.activeNews--
        break
      case processEnum.NEXT:
        state.activeNews++
        break
      default:
        break
    }
  }

  const resetActiveNews = () => {
    state.activeNews = 0
  }

  // Readables
  const news = computed(() => state.news)
  const repeatedNewsData = computed(() => state.repeatedNewsData)
  const config = computed(() => state.config)
  const activeNews = computed(() => state.activeNews)

  return {
    // State
    state,
    //Methods
    setNews,
    setConfig,
    setActiveNews,
    resetActiveNews,
    // Readables
    news,
    repeatedNewsData,
    config,
    activeNews
  }
}
