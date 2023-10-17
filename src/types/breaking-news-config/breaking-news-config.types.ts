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
export interface BreakingNewsConfig {
  rtl?: boolean
  borderColor?: String
  label: BreakingNewsLabelConfig
  controls: BreakingNewsControlsConfig
}
