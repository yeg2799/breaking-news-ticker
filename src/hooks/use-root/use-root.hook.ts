import { reactive, computed } from 'vue-demi'

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

  const setActiveNews = (process: '') => {
    switch (process) {
      case 'prev':
        state.activeNews--
        break
      case 'next':
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
