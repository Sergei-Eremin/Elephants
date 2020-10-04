"use strict" 

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const slider = document.getElementById('slider1')
let mySwiper;

function mobSlider() {
  if(window.innerWidth <= 768 && slider.dataset.mobile == "false"){
    mySwiper = new Swiper('.swiper-container', {
          loop: true,
          draggable: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        })
    slider.dataset.mobile = 'true';
  };
  

  if(window.innerWidth > 768){
    slider.dataset.mobile = 'false';

    if(slider.classList.contains('swiper-container-initialized')){
      mySwiper.destroy();
    }
}}

mobSlider();

window.addEventListener('resize', function(){
  mobSlider();
});