import { ref, onUnmounted } from 'vue-demi'

export default () => {
  const directionStyle = ref(0)
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

      if (-directionStyle.value < firstChild?.clientWidth) {
        directionStyle.value -= 1
      } else {
        directionStyle.value = 0
        moveToAppendChild()
      }
    }, 10)
  }

  return {
    directionStyle,
    scrollEffect
  }
}
