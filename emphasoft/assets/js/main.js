const menu = document.querySelector('.burger');
const header_mobile = document.querySelector('.nav-mobile');

menu.addEventListener('click', function (){
    header_mobile.classList.toggle('open')
});