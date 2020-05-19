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

function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function checkEmail(input) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(input.value.trim())) {
		showSuccess(input);
	} else {
		showError(input, 'Email is not valid');
	}
}

form.addEventListener('submit', function (e) {
	e.preventDefault();

	if (username.value === '') {
		showError(username, 'Username is required');
	} else {
		showSuccess(username);
	}

	if (email.value === '') {
		showError(email, 'Username is required');
	} else {
		showSuccess(email);
	}

	if (password.value === '') {
		showError(password, 'Username is required');
	} else {
		showSuccess(password);
	}
});
