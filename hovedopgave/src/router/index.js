import { createRouter, createWebHistory } from 'vue-router'
import Guide from '../views/Guide.vue'
import LoginScreen from '../views/LoginScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginScreen
    },
    {
      path: '/guide',
      name: 'guide',
      component: Guide
    }
  ]
})

export default router
