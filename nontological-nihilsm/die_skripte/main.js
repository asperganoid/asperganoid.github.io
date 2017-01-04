var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'die_bilder/template.jpg') {
		myImage.setAttribute ('src','die_bilder/nihilismus-kuntz.jpg');
	} else {
		myImage.setAttribute ('src','die_bilder/template.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Bitte eingeben dein name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Wir sind nichts, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Wir sind nichts, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}