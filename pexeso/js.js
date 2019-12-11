var memoryItems = ['1', '1', '2', '2', '3', '3', '4', '4',
	'5', '5', '6', '6', '7', '7', '8', '8',
	'9', '9', '10', '10', '11', '11', '12', '12', '13', '13',
	'14', '14', '15', '15'];
var selectedItemValue = null;
var selectedItemID = null;
var flippedTiles = 0;
var flipped = 0;

Array.prototype.randomizeTiles = function () {
	let i = 0;
	while (i != this.length) {
		let randomNumber = Math.floor(Math.random() * this.length);
		let temp = this[randomNumber];
		this[randomNumber] = this[i];
		this[i] = temp;
		i++;
	}
};


const flipTile = e => {
	var div = e.target;
	if ((div.innerHTML == "" || div.innerHTML == null) && flipped < 2) {
		div.innerHTML = memoryItems[Math.floor(div.id)];
		if (flipped == 0) {
			flipped++;
			selectedItemID = div.id;
			selectedItemValue = memoryItems[Math.floor(div.id)];
		} else if (flipped == 1) {
			flipped++;
			if (selectedItemValue == memoryItems[Math.floor(div.id)]) {
				flippedTiles += 2;
				flipped = 0;
				if (flippedTiles == memoryItems.length) {
					alert("Výhra");
					generateBoard();
				}
			} else {
				//potřeba nastavit časování
				flipped = 0;
				let previousDiv = document.getElementById(selectedItemID);
				previousDiv.classList.remove("clicked");
				previousDiv.innerHTML = "";
				div.classList.remove("clicked");
				div.innerHTML = "";

			}
		}
	}
};
const generateBoard = () => {
	flipped = 0;
	memoryItems.randomizeTiles();
	let board = document.getElementById("board");
	board.innerHTML = "";
	for (let i = 0; i < memoryItems.length; i++) {
		board.innerHTML += "<div id=\"" + i + "\"></div>";
	}
	let btns = board.getElementsByTagName("div");
	for (let i = 0; i < btns.length; i++) {
		btns[i].onclick = flipTile;
	}
};

generateBoard();