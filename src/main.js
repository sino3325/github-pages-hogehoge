import './assets/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import('preline') // for Preline (JSファイルが入っています)

const app = createApp(App)

app.use(router)

app.mount('#app')