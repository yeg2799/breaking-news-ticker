import { reactive, computed } from 'vue-demi'
import { processEnum } from '@/enums'

export default () => {
  const state = reactive({
    news: [],
    config: null,
    activeNews: 0
  })

  //Methods
  const setNews = (news: []) => {
    state.news = news
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

  // Readables
  const news = computed(() => state.news)

  const config = computed(() => state.config)
  const activeNews = computed(() => state.activeNews)

  return {
    // State
    state,
    //Methods
    setNews,
    setConfig,
    setActiveNews,
    // Readables
    news,
    config,
    activeNews
  }
}
