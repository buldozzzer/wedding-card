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
      component: () => import('../views/EvgeniyView.vue')
    },
    {
      path: '/dorogoy-dima',
      name: 'dorogoy-dima',
      component: () => import('../views/DimaView.vue')
    },
    {
      path: '/dorogaya-natalya',
      name: 'dorogaya-natalya',
      component: () => import('../views/NatalyaSitnikovaView.vue')
    },
    {
      path: '/aleksey-and-alla',
      name: 'aleksey-and-alla',
      component: () => import('../views/AlekseyAndAllaView.vue')
    },
    {
      path: '/yaroslav-and-elena',
      name: 'yaroslav-and-elena',
      component: () => import('../views/YaroslavAndElena.vue')
    },
    {
      path: '/yuri-and-natalya',
      name: 'yuri-and-natalya',
      component: () => import('../views/RostovtsevyView.vue')
    },
    {
      path: '/evgeniy-and-tatiana',
      name: 'evgeniy-and-tatiana',
      component: () => import('../views/RomanenkoView.vue')
    },
    {
      path: '/kristof-and-julia',
      name: 'kristof-and-julia',
      component: () => import('../views/KristoffAndYulia.vue')
    },
    {
      path: '/igor-and-larisa',
      name: 'igor-and-larisa',
      component: () => import('../views/ZabrodinsView.vue')
    },
    {
      path: '/alexander-and-diana',
      name: 'alexander-and-diana',
      component: () => import('../views/AleksanderAndDianaView.vue')
    },
    {
      path: '/anton-and-yana',
      name: 'anton-and-yana',
      component: () => import('../views/AntonAndYanaView.vue')
    },
    {
      path: '/taras-and-anna',
      name: 'taras-and-anna',
      component: () => import('../views/TarasAndAnnaView.vue')
    },
    {
      path: '/dorogoy-andrey',
      name: 'dorogoy-andrey',
      component: () => import('../views/AndreyView.vue')
    },
    {
      path: '/dorogoy-aleksey',
      name: 'dorogoy-aleksey',
      component: () => import('../views/AlekseyView.vue')
    },
    {
      path: '/dorogoy-ilya',
      name: 'dorogoy-ilya',
      component: () => import('../views/IlyaView.vue')
    },
    {
      path: '/dorogoy-kirill',
      name: 'dorogoy-kirill',
      component: () => import('../views/KirillView.vue')
    },
    {
      path: '/vanya-and-nastya',
      name: 'vanya-and-nastya',
      component: () => import('../views/IvanAndNastyaView.vue')
    },
    {
      path: '/emre-and-natalya',
      name: 'emre-and-natalya',
      component: () => import('../views/EmreAndNatalyaView.vue')
    },
    {
      path: '/dorogoy-aleksoda',
      name: 'dorogoy-aleksoda',
      component: () => import('../views/AlekseyOdaView.vue')
    },
    {
      path: '/dorogaya-julia',
      name: 'dorogaya-julia',
      component: () => import('../views/JuliaOdaView.vue')
    },
    {
      path: '/dorogaya-babulya-natasha',
      name: 'dorogaya-babulya-natasha',
      component: () => import('../views/NatalyaView.vue')
    },
    {
      path: '/dorogaya-baba-malya',
      name: 'dorogaya-baba-malya',
      component: () => import('../views/MalyaView.vue')
    },
    {
      path: '/dorogoy-sergey',
      name: 'dorogoy-sergey',
      component: () => import('../views/SergeyView.vue')
    },
    {
      path: '/dorogoy-nikita',
      name: 'dorogoy-nikita',
      component: () => import('../views/NikitaView.vue')
    },
    {
      path: '/dorogaya-nastya',
      name: 'dorogaya-nastya',
      component: () => import('../views/NastyaView.vue')
    },
    {
      path: '/dorogoy-rodion',
      name: 'dorogoy-rodion',
      component: () => import('../views/RodionView.vue')
    },
    {
      path: '/evgeniy-and-evgenia',
      name: 'evgeniy-and-evgenia',
      component: () => import('../views/EvgeniyAndEvgeniaView.vue')
    },
    {
      path: '/vladimir-and-larisa',
      name: 'vladimir-and-larisa',
      component: () => import('../views/VladimirAndLarisaView.vue')
    },
    {
      path: '/nikolay-and-anna',
      name: 'nikolay-and-anna',
      component: () => import('../views/NikolayAndAnnaView.vue')
    },
    {
      path: '/roman-and-lyuba',
      name: 'roman-and-lyuba',
      component: () => import('../views/RomanAndLyubovView.vue')
    },
    {
      path: '/alina-and-andrey',
      name: 'alina-and-andrey',
      component: () => import('../views/AlinaandAndreyView.vue')
    },
    {
      path: '/ruslan-and-viktoria',
      name: 'ruslan-and-viktoria',
      component: () => import('../views/RuslanAndViktoriaView.vue')
    },
    {
      path: '/alexey-and-irina',
      name: 'alexey-and-irina',
      component: () => import('../views/AlekseyAndIrinaView.vue')
    },
  ],
})

export default router
