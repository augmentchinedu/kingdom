import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:"/install",
      name: 'installation',
      component: ()=>import('../views/Installation.vue')
    },
    {
      path: '/updates',
      name: 'updates',
      component: () => import('../views/UpdatesView.vue')
    }
  ]
})

export default router
