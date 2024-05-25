import { createApp } from 'vue'
import './globals.css'
import App from './App.vue'
import router from './router.ts'
import pinia from './stores'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { CoCart } from "oh-vue-icons/icons"
addIcons(CoCart);

createApp(App)
.use(router)
.use(pinia)
.component('v-icon', OhVueIcon)
.mount('#app')
