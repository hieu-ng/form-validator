const form = document.querySelector('form');
const username = document.querySelector('username');
const email = document.querySelector('email');
const password = document.querySelector('password');
const password2 = document.querySelector('password2');

function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

form.addEventListener('submit', function (e) {
	e.preventDefault();

	if (username.value === '') {
		showError(username, 'Username is required');
	} else {
		showSuccess(username);
	}
});
