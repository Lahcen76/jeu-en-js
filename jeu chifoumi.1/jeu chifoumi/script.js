const user = document.getElementById('user');
const result = document.getElementById('result');
const arrayChoix = [ 'Pierre', 'Feuille', 'Ciseau' ];

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
	}
});

result.addEventListener('click', (e) => {
	computer = arrayChoix[Math.floor(Math.random() * arrayChoix.length)];

	if (joueur !== '') {
		imgJoueur.src = `image/${joueur}.jpg`;
		imgComputer.src = `image/${computer}.jpg`;

		console.log(joueur);
		console.log(computer);
		if (joueur === computer) console.log('Vous avez fait une egalité !');
		else if (
			(joueur === 'Pierre' && computer === 'Ciseau') ||
			(joueur === 'Feuille' && computer === 'Pierre') ||
			(joueur === 'Ciseau' && computer === 'Feuille')
		) {
			console.log('Vous avez gagné !!');
			won += 1;
			calcScore();
		} else {
			console.log('Vous avez perdu !');
			lost += 1;
			calcScore();
		}
	}
});

function calcScore() {
	document.getElementById('score').innerHTML = 'Gagné: ' + won + ' fois. Perdu: ' + lost + ' fois.';
}
