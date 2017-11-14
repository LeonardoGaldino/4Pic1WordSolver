let word;
let letters;
let marks;
let list = document.getElementById('output');

function initApp() {
	word = [];
	marks = [];

	letters = document.getElementById('letters-inp').value.split(' ');
	letters = letters.filter((el) => {
		return (el != '');
	});

	for(let i = 0 ; i < letters.length ; ++i)
		marks.push(false);

	let tempWord = document.getElementById('word-inp').value;
	for(let i = 0 ; i < tempWord.length ; ++i) {
		word.push(tempWord[i]);
	}

	list.innerHTML = '';
}

function appendResult() {
	let newItem = document.createElement("LI");
	newItem.innerHTML = word.join('');
	list.appendChild(newItem);
}

function swap(idx1 , idx2) {
	let t = word[idx1];
	word[idx1] = word[idx2];
	word[idx2] = t;
}

function gen(state) {
	if(state == word.length) {
		appendResult();
		return;
	}
	if(word[state] != '_') {
		gen(state+1);
		return;
	}
	for(let i = 0 ; i < letters.length ; ++i) {
		if(!marks[i]) {
			word[state] = letters[i];
			marks[i] = true;
			gen(state+1);
			word[state] = '_';
			marks[i] = false;
		}
	}
}

function generate() {
	initApp();
	gen(0);
}