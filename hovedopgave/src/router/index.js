import { createRouter, createWebHistory } from 'vue-router'
import Guide from '../views/Guide.vue'
import LoginScreen from '../views/LoginScreen.vue'
import HomePage from '../views/PLP.vue'

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
    },
    {
      path: '/plp',
      name: 'plp',
      component: HomePage
    },
  ]
})

export default router
