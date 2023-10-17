interface BreakingNewsLabelConfig {
  title?: String
  bgColor?: String
  color?: String
}

interface BreakingNewsControlsConfig {
  autoPlay?: boolean
  duration?: Number
  isVisible?: boolean
}

interface BreakingNewsItemConfig {
  effect?: String
}

export interface BreakingNewsConfig {
  rtl?: boolean
  borderColor?: String
  label: BreakingNewsLabelConfig
  news: BreakingNewsItemConfig
  controls: BreakingNewsControlsConfig
}
