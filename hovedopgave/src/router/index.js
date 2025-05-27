import { createRouter, createWebHistory } from 'vue-router'
import SplashScreen from '@/components/SplashScreen.vue'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SplashScreen
    },
    {
      path: '/plp',
      name: 'plp',
      component: HomePage
    },
  ]
})

export default router
