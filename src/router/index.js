import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import CreatePost from '../components/CreatePost.vue'
import CreateImage from '../components/CreateImage.vue'
import CreateComment from '../components/CreateComment.vue'
import Config from '../components/Config.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/CreatePost', component: CreatePost, meta: { requiresAuth: true } },
  { path: '/CreateComment', component: CreateComment, meta: { requiresAuth: true } },
  { path: '/CreateImage', component: CreateImage, meta: { requiresAuth: true } },
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
