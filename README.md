<p align="right">
  <a href="https://www.buymeacoffee.com/emreguzel" target="_blank">
  <img width="200" alt="screen shot 2018-03-01 at 10 33 39" src="https://user-images.githubusercontent.com/1577802/36840220-21beb89c-1d3c-11e8-98a4-45fc334842cf.png">
  </a>
</p>

# Vue Breaking News Ticker

## Demo

## Setup


```bash
yarn add v-breaking-news-ticker  # or npm i v-breaking-news-ticker
```

### Vue3

#### Global Register

```js
import { createApp } from 'vue'
import App from './App.vue'
import { BreakingNewsTickerRoot, BreakingNewsTickerControls } from 'v-breaking-news-ticker'
import 'v-breaking-news-ticker/dist/vue3/breaking-news-ticker.min.css'

const app = createApp(App)

app.use(BreakingNewsTickerRoot);
app.use(BreakingNewsTickerControls);
app.mount('#app')
```

#### Local Register
```html
<script setup>
import { BreakingNewsTickerRoot, BreakingNewsTickerControls } from 'v-breaking-news-ticker'
import 'v-breaking-news-ticker/dist/vue3/breaking-news-ticker.min.css'
</script>
```

#### Via CDN
```js
<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/v-breaking-news-ticker"></script>
<link 
 rel="stylesheet" 
 href="https://unpkg.com/v-breaking-news-ticker/dist/vue3/breaking-news-ticker.min.css"
>

<script>
  const app = Vue.createApp({})
    
  app.use(BreakingNewsTickerRoot)
  app.use(BreakingNewsTickerControls);
  app.mount('#app')
</script>
```

### Vue2

#### Global Register

```js
import Vue from "vue";
import { BreakingNewsTickerRoot, BreakingNewsTickerControls } from "v-breaking-news-ticker";
import 'v-breaking-news-ticker/dist/vue2/breaking-news-ticker.min.css'

Vue.use(BreakingNewsTickerRoot);
Vue.use(BreakingNewsTickerControls);
```

#### Local Register
```js
import { BreakingNewsTickerRoot, BreakingNewsTickerControls } from "v-breaking-news-ticker";
import 'v-breaking-news-ticker/dist/vue2/breaking-news-ticker.min.css'

export default {
  components: {
    BreakingNewsTickerRoot,
    BreakingNewsTickerControls
  }
}
```
#### Via CDN
```js
<script src="https://unpkg.com/vue@2"></script>
<script src="https://unpkg.com/v-breaking-news-ticker"></script>
<link 
 rel="stylesheet" 
 href="https://unpkg.com/v-breaking-news-ticker/dist/vue2/breaking-news-ticker.min.css"
>

<script>
new  Vue({
  el: "#app"
});

Vue.use(BreakingNewsTickerRoot);
Vue.use(BreakingNewsTickerControls);
</script>
```
&nbsp;

## Usage

### Usage

```html
<breaking-news-ticker-root :news="breakingNews.news" :config="breakingNews.config">
  <!-- Compulsory -->
  <template #controls>
    <breaking-news-ticker-controls />
      <template #prevIcon>
          // svg icon
      </template>
      <template #nextIcon>
          // svg icon
      </template>
  </template>
</breaking-news-ticker-root>

<script setup>
  const breakingNews = {
  news: [
    {
      id: 0,
      title: 'Breaking News Title - 1'
    },
    {
      id: 1,
      title: 'Breaking News Title - 2'
    },
    {
      id: 2,
      title: 'Breaking News Title - 3'
    },
  ],
  config: {
    rtl: false,
    borderColor: '#EF7B7B',
    label: {
      title: 'Breaking News',
      bgColor: '#EF7B7B',
      color: '#fff'
    },
    news: {
      effect: 'slide-down' //slide-down - slide-up - slide-right
    },
    controls: {
      autoPlay: true,
      duration: 5000,
      bgColor: '#f6f6f6' 
    }
  }
}
</script>
```

Note that all props are compulsory.

| Name             | Type          | Default            | Description                                                  |
| ---------------- | ------------- | ------------------ | ------------------------------------------------------------ |
| news             | Array         | []                 | For the news you want to show                                |
