import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import 'element-plus/dist/index.css'
import App from './App.vue'
import store from './store'
import './index.css'

// const app = createApp(App);

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
