import { ref, onUnmounted } from 'vue-demi'

export default () => {
  const leftStyle = ref(0)
  let scrollInterval

  onUnmounted(() => {
    clearInterval(scrollInterval)
  })

  const scrollEffect = () => {
    scrollInterval = setInterval(() => {
      const container = document.getElementById('container')
      const firstChild = document.querySelector('.breaking-news-ticker-news__item')

      const moveToAppendChild = () => {
        container?.appendChild(firstChild)
      }

      if (-leftStyle.value < firstChild?.clientWidth) {
        leftStyle.value -= 1
      } else {
        leftStyle.value = 0
        moveToAppendChild()
      }
    }, 10)
  }

  return {
    leftStyle,
    scrollEffect
  }
}
