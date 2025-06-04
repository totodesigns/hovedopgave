import { createRouter, createWebHistory } from 'vue-router'
import Guide from '../views/Guide.vue'
import LoginScreen from '../views/LoginScreen.vue'
import HomePage from '../views/PLP.vue'
import Onboarding from '@/views/Onboarding.vue'
import PDP from '../views/PDP.vue';

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
      path: '/onboarding',
      name: 'onboarding',
      component: Onboarding
    },
    {
      path: '/plp',
      name: 'plp',
      component: HomePage
    },
    { path: '/pdp/:id', 
      name: 'PDP', 
      component: PDP, 
      props: true 
    }
  ]
})

export default router
