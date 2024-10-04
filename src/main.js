import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'  // Importazione degli stili di Tailwind

createApp(App).use(router).mount('#app')