<template>
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide slide">
      <div class="greating">
        Свадьба
      </div>
      <div class="we">
        <img class="main_photo" src="../assets/we.jpg" alt="we" id="we">
      </div>
      <div class="greating">
        {{ guest }}
      </div>
      <div class="greating-transparent">
        <p>В этот особенный день мы хотим оказатсья в окружении самых любимых и дорогих нас людей...</p>
      </div>
      <div class="greating-transparent">
        <p>Приглашаем разделить с нами этот праздник!</p>
      </div>
    </div>
    <div class="swiper-slide slide">
      <div class="greating">
        Дата свадьбы
      </div>
      <div class="calendar-wrapper">
        <div id="calendar" class="green"></div>
      </div>
      <div class="about-us">
        22 августа 2025
      </div>
      <div class="timing">
        <div class="greating">
          Тайминг мероприятия
        </div>
      </div>
      <div class="timing-wrapper">
        <div class="left">
          14:00—15:00
        </div>
        <div class="right">
          Сбор гостей и фуршет
        </div>
        <div class="left">
          15:00—15:30
        </div>
        <div class="right">
          Встреча молодожёнов
        </div>
        <div class="left">
          15:30—∞
        </div>
        <div class="right">
          Банкет и праздничная программа
        </div>
      </div>
    </div>
    <div class="swiper-slide slide">
      <div class="greating">
        Локация мероприятия
      </div>
      <div class="we location-item">
        <div class="flipper">
          <div class="front">
            <img class="main_photo" src="../assets/gosudar.jpg" alt="Дом торжеств Государь" id="we">
          </div>
          <div class="back">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae1115d64ab2ff8050213da8303a0e636ebc5e798c546183437486bcb77491671&amp;source=constructor" width="100%" height="auto" frameborder="0"></iframe>
          </div>
        </div>
      </div>
      <div class="location">
        Дом торжеств «Государь»
        <br>г. Москва, Лобненская ул., 11
      </div>
      <div class="secret">
        <div class="about-us">
          Кодовое слово на въезде:
        </div>
        <div class="greating">
          ЧИЗКЕЙК
        </div>
      </div>
      <div class="aligner">
        <div class="remark">
          *На территории Дома торжеств
          <br>«Государь» имеется
          <br>бесплатная парковка
        </div>
      </div>
    </div>
    <div class="swiper-slide slide">
      <div class="greating">
        Дресс-код и детали мероприятия
      </div>
      <div class="wishes">
        <div class="wish">
          <div class="child">
            <p>ЛЮБОЙ цвет одежды</p>
          </div>
        </div>
        <div class="wish icon">
          <p><img src="../assets/good.svg" alt="хорошо"></p>
        </div>
        <div class="wish">
          <div class="child">
            <p>Официально-деловой или праздничный стиль</p>
          </div>
        </div>
        <div class="wish icon">
          <p>
            <img src="../assets/good.svg" alt="хорошо">
          </p>
        </div>
        <div class="wish">
          <div class="child">
            <p>Не приветствуются: джинсы, шорты,
              <br>поло, футболки, майки, спортивная одежда</p>
          </div>
        </div>
        <div class="wish icon">
          <p><img src="../assets/not_good.svg" alt="плохо"></p>
        </div>
        <div class="wish">
          <div class="child">
            <p>Вместо цветов будем рады видеть бутылку любого хорошего алкоголя</p>
          </div>
        </div>
        <div class="wish icon">
          <p><img src="../assets/good.svg" alt="хорошо"></p>
        </div>
      </div>
      <img src="../assets/angel_without_bg.svg" alt="we" id="we">
    </div>
    <div class="swiper-slide slide">
      <div class="greating">
        Анекта гостя
      </div>
      <div>
        <p>Подтвердите свое присутствие</p>
				<form class="form" onsubmit="return false">
					<label class="rad-label">
						<input type="radio" class="rad-input" name="rad">
						<div class="rad-design"></div>
						<div class="rad-text">Я приду</div>
					</label>
					<label class="rad-label">
						<input type="radio" class="rad-input" name="rad">
						<div class="rad-design"></div>
						<div class="rad-text">Я не приду</div>
					</label>
					<button class="button" @click="confirm">Подтвердить</button>
				</form>
      </div>
      <div class="greating">
        Контакты
      </div>
      <div class="greating-transparent">
        <p>По всем вопросам вы можете обратиться:
          <br>
          <b>+7 (925) 471-01-84</b> жених Иван
          <br>
          <b>+7 (964) 520-04-99</b> невеста Дарья</p>
      </div>
      <div class="final">
        <p>Мы вас ждём!</p>
      </div>
      <div class="timer-wrapper">
        <p>До начала мероприятия осталось</p>
        <div class="timer">
          <div class="timer-item timer-days">00</div>
          <div class="separator">:</div>
          <div class="timer-item timer-hours">00</div>
          <div class="separator">:</div>
          <div class="timer-item timer-minutes">00</div>
          <div class="separator">:</div>
          <div class="timer-item timer-seconds">00</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Swiper from '@/utils/swiper';
import jsCalendar from '../utils/jsCalendar';
import {GoogleSpreadsheet} from 'google-spreadsheet';

export default {
	name: 'main-page',
	props: ['guest'],
	data(){
		return {
			check_status: ''
		};
	},
	mounted(){
		jsCalendar.new("#calendar", "22/08/2025", {
			"navigator": "false",
			"monthFormat": "month YYYY",
			"firstDayOfTheWeek": "2",
			"language": "ru"
		});
		const swiper = new Swiper('.swiper-container', {
        autoHeight: true,
        direction: 'vertical',
        loop: false,
        spaceBetween: 30,
        slidesPerView: 1,
        // mousewheel: {
        //   releaseOnEdges: true,
        // },
      });
			const deadline = new Date('2025-08-22T14:00:00');
    
    // Найдите элементы DOM
    const elDays = document.querySelector('.timer-days');
    const elHours = document.querySelector('.timer-hours');
    const elMinutes = document.querySelector('.timer-minutes');
    const elSeconds = document.querySelector('.timer-seconds');
    
    // Функция склонения числительных
    const declensionNum = (num, words) => {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
    };
  
    // Функция обновления таймера
    const updateTimer = () => {
      const now = new Date();
      const diff = Math.max(0, deadline - now);
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
  
      elDays.textContent = String(days).padStart(2, '0');
      elHours.textContent = String(hours).padStart(2, '0');
      elMinutes.textContent = String(minutes).padStart(2, '0');
      elSeconds.textContent = String(seconds).padStart(2, '0');
  
      elDays.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
      elHours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      elMinutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      elSeconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  
      if (diff === 0) {
        clearInterval(timerId);
      }
    };
  
    // Запустите таймер
    updateTimer();
    const timerId = setInterval(updateTimer, 1000);

    const box = document.querySelector('.flipper');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 1, // Ensure the entire element is in view
    });

    observer.observe(box);
	},
  methods: {
    async confirm(){
      const doc = new GoogleSpreadsheet('128JRm4srOrSIERoYzrE1a0L4EBoCyDpssprbh9ESgaM');
      console.log(doc);
    }
  }
}
</script>