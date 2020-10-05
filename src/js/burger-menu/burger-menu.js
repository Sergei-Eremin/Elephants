"use strict"

let burgerBtn = document.querySelector('.burger-btn');
burgerBtn.addEventListener('click',()=>{
    burgerBtn.classList.toggle('active-burger') ;
    document.body.classList.toggle('no-scroll-body');
    let headerNavigation = document.querySelector('.main-header__navigation')
    headerNavigation.classList.toggle('active')
})