import { createApp } from 'vue'
import App from './App.vue'
import store from '@/vuex/index.js'

const app = createApp(App);

app
    .use(store)
    .mount('#app')