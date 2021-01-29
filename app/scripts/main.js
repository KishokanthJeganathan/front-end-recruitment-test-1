const moreBacon = () => {
	const image = document.querySelector('#imageOfBacon');
	const clonedImage = image.cloneNode(true);
	image.after(clonedImage);
};

const logSubmit = (event) => {
	// Since the submit has no attributes,  the <form> data is sent to the same page that the form is in. Usually this wouldnt happen since the data is sent to an endpoint securely. Such data visibility shouldnt really happen due to security reasons, but since this is not a website that goes to production, I reckon its fine

	log.textContent = `Wohoo! You just got yourself a great deal and an email confirming your payment should be in your inbox soon!`;
	event.preventDefault();

	// just removing the node containing info on what was in the basket since hypothetically the basket should be cleared upon payment confirmation

	orderContainer.remove();
	form.reset();
};
const orderContainer = document.getElementById('order-container');
const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);
