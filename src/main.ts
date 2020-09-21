import './lib/vale.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import Icon from './lib/Icon.vue'
import 'github-markdown-css'
import 'prismjs/themes/prism-tomorrow.css'
import ClickOutside from './plugins/click-outside.js'

const app = createApp(App)

app.component('v-icon', Icon)
app.use(router)
app.use(ClickOutside)
app.mount('#app')
