import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Test from './components/Test.vue'
import Test2 from './components/Test2.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Test },
    { path: '/xxx', component: Test2 }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
