const moreBacon = () => {
	const image = document.querySelector('#imageOfBacon');
	const clonedImage = image.cloneNode(true);
	image.after(clonedImage);
};

const logSubmit = (event) => {
	log.textContent = `Wohoo! You just got yourself a great deal and an email confirming your payment should be in your inbox soon!`;
	event.preventDefault();
};

const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);
