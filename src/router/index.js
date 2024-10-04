import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import CreaPost from '../components/CreaPost.vue'
import CreaCommento from '../components/CreaCommento.vue'
import CreaImmagine from '../components/CreaImmagine.vue'
import Config from '../components/Config.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/CreaPost', component: CreaPost, meta: { requiresAuth: true } },
  { path: '/CreaCommento', component: CreaCommento, meta: { requiresAuth: true } },
  { path: '/CreaImmagine', component: CreaImmagine, meta: { requiresAuth: true } },
  { path: '/Config', component: Config, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !localStorage.getItem('isAuthenticated')) {
    next('/')
  } else {
    next()
  }
})

export default router
