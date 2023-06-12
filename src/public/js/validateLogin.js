const form = document.getElementById('login');
const inputs = document.querySelectorAll('#login input');
const expressions = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{6,12}$/ 
}
const camps = {
    email: false,
    password: false
}
const validateForm = (e) => {
    switch (e.target.name) {
        case "email":
            validateCamp(expressions.email, e.target, 'email');
            break;
        case "password":
            validateCamp(expressions.password, e.target, 'password');
            break;

    }
}
const validateCamp = (expression, input, camp) => {
    if (expression.test(input.value)) {
        document.getElementById(`group-${camp}`).classList.remove('form-group-incorrect');
        document.getElementById(`group-${camp}`).classList.add('form-group-correct');
        document.querySelector(`#group-${camp} i`).classList.add('fa-check-circle');
        document.querySelector(`#group-${camp} i`).classList.remove('fa-times-circle');
        document.querySelector(`#group-${camp} .form-input-error`).classList.remove('form-input-error-asset');
        camps[camp] = true;
    } else {
        document.getElementById(`group-${camp}`).classList.add('form-group-incorrect');
        document.getElementById(`group-${camp}`).classList.remove('.form-group-correct');
        document.querySelector(`#group-${camp} i`).classList.add('fa-times-circle');
        document.querySelector(`#group-${camp} i`).classList.remove('fa-check-circle');
        document.querySelector(`#group-${camp} .form-input-error`).classList.add('form-input-error-asset');
        camps[camp] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (camps.email && camps.password) {
        form.submit();
    } else {
        document.getElementById('form-message').classList.add('form-message-asset');
    }
}
);

