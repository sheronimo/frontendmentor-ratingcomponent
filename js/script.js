const ratingState = document.querySelector('#rating-state');
const thanksState = document.querySelector('#rating-thanks');
const form = document.querySelector('#rating-form');
const selectedRatingField = document.querySelector('#selected-num');
const ratingOptions = document.querySelectorAll('.input-rating');
const errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	ratingOptions.forEach((rating) => {
		if (rating.checked) {
			errorMessage.classList.remove('show');
			ratingState.classList.remove('show');
			thanksState.classList.add('show');
			selectedRatingField.innerText = rating.value;
		} else {
			errorMessage.classList.add('show');
		}
	});
});
