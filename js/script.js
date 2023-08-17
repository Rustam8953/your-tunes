const btnMenu = document.querySelector('.mobile-btn')
const mobileNav = document.querySelector('.header__nav')
const body = document.querySelector('body')
const popup = document.querySelector('.popup')
const popupBtn = document.querySelector('.popup-btn')

btnMenu.addEventListener('click', () => {
    body.classList.toggle('body--stuck')
    btnMenu.classList.toggle('menu-stuck')
    mobileNav.classList.toggle('nav--stuck')
})

document.addEventListener('DOMContentLoaded', () => {
    popup.classList.add('popup--stuck');
    body.classList.add('body--stuck');
})

popupBtn.addEventListener('click', () => {
    body.classList.remove('body--stuck')
    popup.classList.remove('popup--stuck')
})