import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/katya-and-nastya',
      name: 'katya-nastya',
      component: () => import('../views/KatyaAndNastyaView.vue'),
    },
    {
      path: '/valeriy-and-irina',
      name: 'bryukhovy',
      component: () => import('../views/ValeriyAndIrinaView.vue')
    },
    {
      path: '/alexander-and-natalya',
      name: 'alexander-and-natalya',
      component: () => import('../views/AlexandrAndNatalyaView.vue')
    },
    {
      path: '/vitaliy-and-sofia',
      name: 'vitaliy-and-sofia',
      component: () => import('../views/VitaliyAndSofiaView.vue')
    },
    {
      path: '/maxim-and-tatyana',
      name: 'maxim-and-tatyana',
      component: () => import('../views/MaximAndTatyanaView.vue')
    },
    {
      path: '/vladislav-and-valentina',
      name: 'vladislav-and-valentina',
      component: () => import('../views/VladislavAndValentina.vue')
    },
    {
      path: '/fedor-and-maria',
      name: 'fedor-and-maria',
      component: () => import('../views/FedorAndMariyaView.vue')
    },
    {
      path: '/dorogaya-anya',
      name: 'dorogaya-anya',
      component: () => import('../views/AnnaKhotnichukView.vue')
    },
    {
      path: '/buduschie-roditeli',
      name: 'artyom-and-masha',
      component: () => import('../views/ArtyomAndMariaView.vue')
    },
    {
      path: '/radik-and-anna',
      name: 'radik-and-anna',
      component: () => import('../views/RadikAndAnnaView.vue')
    },
    {
      path: '/aleksey-and-natalya',
      name: 'aleksey-and-natalya',
      component: () => import('../views/AlekseyAndNatalyaView.vue')
    },
    {
      path: '/vikentiy-and-ludmila',
      name: 'vikentiy-and-ludmila',
      component: () => import('../views/VikentiyAndLyudmilaView.vue')
    },
    {
      path: '/gennady-and-valentina',
      name: 'gennady-and-valentina',
      component: () => import('../views/GennadyAndValentina.vue')
    },
    {
      path: '/dorogaya-babushka-rita',
      name: 'dorogaya-babushka-rita',
      component: () => import('../views/MargaritaView.vue')
    },
    {
      path: '/dorogoy-zhenya',
      name: 'dorogoy-zhenya',
      component: () => import('../views/DimaView.vue')
    },
    {
      path: '/dorogoy-dima',
      name: 'dorogoy-dima',
      component: () => import('../views/DimaView.vue')
    },
  ],
})

export default router
