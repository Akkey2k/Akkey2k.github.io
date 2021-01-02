// Список нод приложения
var $start = document.querySelector("#start"),
	$game = document.querySelector('#game'),
	$time = document.querySelector('#time'),
	$result = document.querySelector('#result'),
	$timeHeader = document.querySelector('#time-header'),
	$resultHeader = document.querySelector('#result-header'),
	$gameTime = document.querySelector('#game-time');

// Локальные переменные
var score = 0,
	isGameStarted = false,
	colors = ['red', 'blue', 'green', 'pink', 'grey'];

// Прослушка основных функций
$start.addEventListener('click', startGame);
$game.addEventListener('click', handleBoxClick);
$gameTime.addEventListener('input', setGameTime);

// Старт игры
function startGame() {
	score = 0;
	setGameTime();
	$gameTime.setAttribute('disabled','true')
	$timeHeader.classList.remove('hide');
	$resultHeader.classList.add('hide');

	isGameStarted = true
	$start.classList.add('hide');
	$game.style.backgroundColor = '#fff';

	var interval = setInterval(function () {
		var time = parseFloat($time.textContent);

		if (time <= 0) {
			clearInterval();
			endGame();
		}
		else {
			$time.textContent = (time - 0.1).toFixed(1)
		}
	}, 100)

	// Создание
	renderBox();
}

// Установка игрового времени
function setGameTime() {
	// + перед переменной это parseInt
	var time = +$gameTime.value;
	// Обновление ноды времени на полученное из ноды инпута времени
	$time.textContent = time.toFixed(1);
}

function renderBox() {
	// Отчистка игрового поля
	$game.innerHTML = '';

	// Создание квадрата / его стили / рандомное положение
	var box = document.createElement('div');
	var boxSize = getRandom(30, 100);

	var gameSize = $game.getBoundingClientRect(),
		maxTop = gameSize.height - boxSize,
		maxLeft = gameSize.width - boxSize;

	var randomColorIndex = getRandom(0, colors.length)

	box.style.width = box.style.height = boxSize + 'px';
	box.style.position = 'absolute';
	box.style.backgroundColor = colors[randomColorIndex];
	box.style.top = getRandom(0, maxTop) + 'px';
	box.style.left = getRandom(0, maxLeft) + 'px';
	box.style.cursor = 'pointer';

	box.setAttribute('data-box', 'true')

	$game.insertAdjacentElement('afterbegin', box);
}

function handleBoxClick() {
	// Если игра закончилась то клики по боксам не работают
	if (!isGameStarted) {
		return
	}
	// Если то что было кликнуто имеет дата-атрибут
	if (event.target.dataset.box) {
		renderBox();
		score++;
	}
}

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}

function endGame() {
	setGameScore();
	$start.classList.remove('hide');
	$game.style.backgroundColor = '#ccc';
	$game.innerHTML = '';
	isGameStarted = false;
	$timeHeader.classList.add('hide');
	$resultHeader.classList.remove('hide');
	$gameTime.removeAttribute('disabled')
}
function setGameScore() {
	$result.textContent = score.toString()
}