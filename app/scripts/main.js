/* eslint-disable require-jsdoc */

const moreBacon = () => {
	const image = document.querySelector('#imageOfBacon');

	// Create a copy of it
	const clonedImage = image.cloneNode(true);

	// Inject it into the DOM
	image.after(clonedImage);
};
