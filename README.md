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
import { BreakingNewsTickerRoot, BreakingNewsTickerTitle, BreakingNewsTickerNews, BreakingNewsTickerControls } from 'v-breaking-news-ticker'
import 'v-breaking-news-ticker/dist/vue3/breaking-news-ticker.min.css'

const app = createApp(App)

app.use(BreakingNewsTickerRoot);
app.use(BreakingNewsTickerTitle);
app.use(BreakingNewsTickerNews);
app.use(BreakingNewsTickerControls);
app.mount('#app')
```

#### Local Register
```html
<script setup>
import { BreakingNewsTickerRoot, BreakingNewsTickerTitle, BreakingNewsTickerNews, BreakingNewsTickerControls } from 'v-breaking-news-ticker'
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
  app.use(BreakingNewsTickerTitle);
  app.use(BreakingNewsTickerNews);
  app.use(BreakingNewsTickerControls);
  app.mount('#app')
</script>
```

### Vue2

#### Global Register

```js
import Vue from "vue";
import { BreakingNewsTickerRoot, BreakingNewsTickerTitle, BreakingNewsTickerNews, BreakingNewsTickerControls } from "v-breaking-news-ticker";
import 'v-breaking-news-ticker/dist/vue2/breaking-news-ticker.min.css'

Vue.use(BreakingNewsTickerRoot);
Vue.use(BreakingNewsTickerTitle);
Vue.use(BreakingNewsTickerNews);
Vue.use(BreakingNewsTickerControls);
```

#### Local Register
```js
import { BreakingNewsTickerRoot, BreakingNewsTickerTitle, BreakingNewsTickerNews, BreakingNewsTickerControls } from "v-breaking-news-ticker";
import 'v-breaking-news-ticker/dist/vue2/breaking-news-ticker.min.css'

export default {
  components: {
    BreakingNewsTickerRoot,
    BreakingNewsTickerTitle,
    BreakingNewsTickerNews,
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
Vue.use(BreakingNewsTickerTitle);
Vue.use(BreakingNewsTickerNews);
Vue.use(BreakingNewsTickerControls);
</script>
```
&nbsp;

## Usage

### Usage

```html
<breaking-news-ticker-root :news='your_news_arrays'>
  <!-- Compulsory -->
  <template #title>
    <breaking-news-ticker-title :title='your_title' />
  </template>
  <!-- Compulsory -->
  <template #news>
    <breaking-news-ticker-news />
  </template>
  <!-- Compulsory -->
  <template #controls>
    <breaking-news-ticker-controls />
  </template>
</breaking-news-ticker-root>
```

Note that all props are compulsory.

| Name             | Type          | Default            | Description                                                  |
| ---------------- | ------------- | ------------------ | ------------------------------------------------------------ |
| news             | Array         | []                 | For the news you want to show                                |
| title            | String        | ''                 | For your title                                               |
