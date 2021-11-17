//
let play = true;
const alphabet = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z'
];

const myKeyboard = document.getElementById('myKeyboard');
const petName = document.getElementById('petName');
const petList = [ 'crevette', 'pingouin', 'ecureuil', 'babouin', 'galinette', 'sanglier' ];

let pet = petList[aleaNb(0, petList.length)];

const arrayPet = pet.split('');
// console log pour tricher
// console log (arrayPet)

arrayPet.forEach((element, index) => {
	// let myLettre = element.toUpperCase()
	let myIndex = index;
	let myCase = ` <div id="indexLetter${myIndex}" class="myLetter border border-dark col-lg-1 col-1 rounded text-center">-</div> `;
	petName.innerHTML += myCase;
});

alphabet.forEach((element) => {
	let myKey = element;
	myKey = myKey.toUpperCase();
	let myKeyButton = `<button class="m-2 btn btn-outline-primary col-2" id="myKey${myKey}">${myKey}</button>`;
	myKeyboard.innerHTML += myKeyButton;
});

function aleaNb(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

let nbLetter = 0;
let life = 8;

myKeyboard.addEventListener('click', (e) => {
	if (e.target.nodeName == 'BUTTON' && play === true) {
		let myScore = nbLetter;
		console.log(e.target.innerText);
		e.target.className = 'm-2 btn btn-primary col-2';

		e.target.disabled = true;
		arrayPet.forEach((element, index) => {
			if (e.target.innerText.toLowerCase() == element) {
				document.getElementById(`indexLetter${index}`).innerText = element;
				nbLetter++;
			}
		});

		if (nbLetter == arrayPet.length) {
			if (confirm('Gagné, voulez-vous rejouer ?')) {
				location.reload();
			}
			play = false;
		}

		if (myScore == nbLetter) {
			life--;
		}

		switch (life) {
			case 0:
				document.getElementById('myLife').innerHTML = '0';
				if (confirm('perdu, voulez-vous rejouer ?')) {
					location.reload();
				}
				play = false;
				break;
			case 7:
				document.getElementById('myLife').innerHTML = '7';
				break;
			case 6:
				document.getElementById('myLife').innerHTML = '6';
				break;
			case 5:
				document.getElementById('myLife').innerHTML = '5';
				break;
			case 4:
				document.getElementById('myLife').innerHTML = '4';
				break;
			case 3:
				document.getElementById('myLife').innerHTML = '3';
				break;
			case 2:
				document.getElementById('myLife').innerHTML = '2';
				break;
			case 1:
				document.getElementById('myLife').innerHTML = '1';
				break;
			default:
				break;
		}
	}
});
