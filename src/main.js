import './assets/main.css'
import './assets/jsCalendar.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

const swiper = new Swiper('.swiper-container', {
autoHeight: true,
direction: 'vertical',
loop: false,
spaceBetween: 30,
slidesPerView: 1,
});