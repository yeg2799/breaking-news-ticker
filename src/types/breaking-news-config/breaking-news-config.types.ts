interface BreakingNewsLabelConfig {
  title?: String
  bgColor?: String
  color?: String
}

interface BreakingNewsNavigationConfig {
  autoPlay?: boolean
  duration?: Number
  isVisible?: boolean
  bgColor?: String
}

interface BreakingNewsItemConfig {
  animation?: {
    effect?: String
  }
}

export interface BreakingNewsConfig {
  rtl?: boolean
  loop?: boolean
  borderColor?: String
  label: BreakingNewsLabelConfig
  news: BreakingNewsItemConfig
  navigation: BreakingNewsNavigationConfig
}
