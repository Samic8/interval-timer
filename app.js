document.addEventListener('DOMContentLoaded', DOMContentLoaded);

function DOMContentLoaded() {
	loadJSON(addQuoteToDOM, getRandomNumber());
}

function addQuoteToDOM(response) {
	var quote = JSON.parse(response);
	document.querySelector('blockquote').innerHTML = quote.text;
	document.querySelector('#author').innerHTML = quote.author;
}

function loadJSON(callback, fileNumber) {
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType('application/json');
	xobj.open('GET', 'quote-' + fileNumber + '.json', true);
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			callback(xobj.responseText);
		}
	}
	xobj.send(null);
}

function getRandomNumber() {
	return Math.floor(Math.random() * 2) + 1;
}