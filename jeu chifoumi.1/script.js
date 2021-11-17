const user = document.getElementById('user');
const result = document.getElementById('result');
const arrayChoix = [ 'Pierre', 'Feuille', 'Ciseau' ];
const arrayImage = [];

console.log(arrayImage);

arrayChoix.forEach((element, index) => {
	let myChoice = element;
	let myCase = `<button class="btn btn-secondary ronded" id="${myChoice}">${myChoice}</button> `;
	user.innerHTML += myCase;
});

var joueur = '';
var computer = '';
var won = 0,
	lost = 0;

user.addEventListener('click', (e) => {
	if (e.target.nodeName == 'BUTTON') {
		joueur = e.target.id;
		console.log(joueur);
	}
});

result.addEventListener('click', (e) => {
	computer = arrayChoix[Math.floor(Math.random() * arrayChoix.length)];

	// var img = document.createElement('img');
	// img.src = 'image/ciseau.jpg';
	// var div = document.getElementById('resultA');
	// div.appendChild(img);

	console.log(computer);

	if (joueur == '' || computer == '') return;

	if (joueur === computer) alert('Vous avez fait une egalité !');
	else if (
		(joueur === 'Pierre' && computer === 'Ciseau') ||
		(joueur === 'Feuille' && computer === 'Pierre') ||
		(joueur === 'Ciseau' && computer === 'Feuille')
	) {
		alert('Vous avez gagné !!');
		won += 1;
		calcScore();
	} else {
		alert('Vous avez perdu !');
		lost += 1;
		calcScore();
	}
});

function calcScore() {
	document.getElementById('score').innerHTML = 'Gagné: ' + won + ' fois. Perdu: ' + lost + ' fois.';
}
