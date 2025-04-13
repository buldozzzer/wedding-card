import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KatyaAndNastyaVirew from '../views/KatyaAndNastyaVirew.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    {
      path: '/katya-and-nastya', component: KatyaAndNastyaVirew},
  ],
})

export default router
