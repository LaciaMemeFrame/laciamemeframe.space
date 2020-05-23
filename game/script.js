var passwords = ['Я гей', 'скажи 300', 'трололо сука', 'хуй тебе а не пороль отпороть тебя', 'Фу, пидор', 'Ты', 'сральная', 'вагина','хуя', 'мне', 'ЭТОТ', 'мир', 'АБСОЛЮТНО понятен', 'свинья негра', 'ДОЛБОЁБ хуйни ЕБАНОЙ', 'Я съел деда', 'СКАЗОЧНЫЙ грязный ПАРАЗИТ', 'соси', 'дитя В бане ПУТИНА', 'МУДОВЫЙ педик в ловушке ВОНЮЧКИ', 'ТУПОЕ ебало ИЗ стула', 'ХУЁВАЯ ДОСКА НА хуе', 'лысый МЕРЗАВЕЦ ЁБНУТЫЙ', 'ТУРЕЦКОЕ ебало родное', 'срака НА хуе тупого говна', 'чилипиздрик НАВАЛЬНОГО', 'ЗЕЛЁНОЕ ЕБЛО НА хуе', 'ЛОВУШКЕР в хуипе ТУПОГО говна', 'ЖИРУХА в ДУРКЕ', 'СПАМ', 'НИЩАЯ какашка НА ХУЕ', 'какого хуя они в ДРУГОМ ПОРЯДКЕ разложены', 'русские вперёд', 'тупой волк приёмный', 'Яблоко', 'мусорная волчара', 'плоскодонка джокера', 'салат В бане ГОВНА', 'ЕБАЛАЙ ВОНЮЧИЙ', 'ДИТЯ хуя', 'мудовое порождение на ХУЕ джокера', 'болван', 'Залупаешься', 'ьуь', ];
var indexOld;
var index = Math.floor((Math.random() * passwords.length));
var password = passwords[index];
var characters = [];
var counter = 0;
	
var interval = setInterval(function(){
		for(i = 0; i < counter; i++) {
			characters[i] = password.charAt(i);
		}
		for(i = counter; i < password.length; i++) {
			characters[i] = Math.random().toString(36).charAt(2);
		}
		$('.password').text(characters.join(''));
	}, 25);
	

function hack() {
	counter++;
	if(counter == password.length){
		$('.granted, .rerun').removeClass('hidden');
	}
}
$(window).on('keydown', hack);
$('.password').on('click', hack);


$('.rerun').on('click', function() {
	//prevent from displaying the same password two times in a row
	indexOld = index; 
	do {
		index = Math.floor((Math.random() * passwords.length));
	} while(index == indexOld);
	
	$('.granted, .rerun').addClass('hidden');
	password = passwords[index];
	characters = [];
	counter = 0;
});

//keyboard events won't fire if the iframe isn't selected first in Full Page view
$('.start').on('click', function() {
	$(this).addClass('hidden');
	$('.info p:last-child, .password').removeClass('hidden');
});