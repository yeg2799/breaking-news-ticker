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

  // Readables
  const news = computed(() => state.news)

  const config = computed(() => state.config)

  return {
    // State
    state,
    //Methods
    setNews,
    setConfig,
    // Readables
    news,
    config
  }
}
