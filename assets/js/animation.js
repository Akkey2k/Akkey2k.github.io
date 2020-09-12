// Получаем нужный элемент
var element = document.querySelector('.animation');
var words = document.querySelectorAll('._anim-items');

var Visible = function (target) {
  // Все позиции элемента
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom 
    // && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    // targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    // targetPosition.left < windowPosition.right
    ) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
    words.forEach(word => {
        word.classList.add('_active')
    });
  } else {
    // Если элемент не видно, то запускаем этот код
    words.forEach(word => {
        word.classList.remove('_active')
    });
  };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible (element);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible (element);


var burger = document.getElementById('menu-toggle'),
    nav = document.getElementById('header'),
    dust = document.getElementsByClassName('dust')[0];

burger.addEventListener("click", isOpen);

function isOpen(){
  // isShowNav();
  if (burger.classList.contains(open)){
    burger.classList.toggle('open');
    nav.classList.toggle('open');
    dust.classList.toggle('open');
  }
  else{
    burger.classList.toggle('open');
    nav.classList.toggle('open');
    dust.classList.toggle('open');
  }
}

document.getElementById('ios_video').setAttribute('playsinline','');
document.getElementById('ios_video').setAttribute('webkit-playsinline','');