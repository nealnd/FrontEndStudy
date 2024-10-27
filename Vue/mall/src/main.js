

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'
import { lazyPlugin } from './directives'

import { componentPlugin } from './components'



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')


