import { createRouter, createWebHistory } from 'vue-router'
import SplashScreen from '@/components/SplashScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SplashScreen
    },
  ]
})

export default router
