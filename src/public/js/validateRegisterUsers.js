window.onload = function () {

    const form = document.querySelector('.form-horizontal');

    form.first_name.focus();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const allErrorLabels = document.querySelectorAll('.error-message');
        allErrorLabels.forEach(element => {
            element.innerHTML = '';
        });
        const errors = [];
        const firstName = form.first_name.value;
        const lastName = form.last_name.value;
        const phoneNumber = form.phone.value;
        const dniNumber = form.dni.value;
        const imageUser = form.image.value;
        const addressUser = form.address.value
        const emailUser = form.email.value;

        if (!firstName) {
            errors.push({ name: 'first_name', message: 'Debes escribir tus nombres' });
            form.first_name.classList.add('is-invalid');
        } else if (firstName.length < 2 || firstName.length > 20) {
            errors.push({ name: 'first_name', message: 'Los nombres deben tener entre 2 y 20 caracteres' });
            form.first_name.classList.add('is-invalid');
        } else if (!/^[a-zA-Z\s]+$/.test(firstName)) {
            errors.push({ name: 'first_name', message: 'Los nombres deben contener solo letras' });
            form.first_name.classList.add('is-invalid');
        } else {
            form.first_name.classList.remove('is-invalid');
            form.first_name.classList.add('is-valid')
        }

        if (!lastName) {
            errors.push({ name: 'last_name', message: 'Debes escribir tus apellidos' });
            form.last_name.classList.add('is-invalid');
        } else if (lastName.length < 2 || lastName.length > 20) {
            errors.push({ name: 'last_name', message: 'Los apellidos deben tener entre 2 y 20 caracteres' });
            form.last_name.classList.add('is-invalid');
        } else if (!/^[a-zA-Z\s]+$/.test(lastName)) {
            errors.push({ name: 'last_name', message: 'Los apellidos deben contener solo letras' });
            form.last_name.classList.add('is-invalid');
        } else {
            form.last_name.classList.remove('is-invalid');
            form.last_name.classList.add('is-valid')
        }

        if (!phoneNumber) {
            errors.push({ name: 'phone', message: 'Debes escribir tu número de teléfono' });
            form.phone.classList.add('is-invalid');
        } else if (phoneNumber.length !== 10) {
            errors.push({ name: 'phone', message: 'El número de teléfono debe tener 10 dígitos' });
            form.phone.classList.add('is-invalid');
        } else {
            form.phone.classList.remove('is-invalid');
            form.phone.classList.add('is-valid')
        }

        if (!dniNumber) {
            errors.push({ name: 'dni', message: 'Debes escribir tu número de identificación' });
            form.dni.classList.add('is-invalid');
        } else if (dniNumber.length < 7) {
            errors.push({ name: 'dni', message: 'El número de identificación debe tener al menos 7 dígitos' });
            form.dni.classList.add('is-invalid');
        } else {
            form.dni.classList.remove('is-invalid');
            form.dni.classList.add('is-valid')
        }

        const extensions = ['.jpg', '.png', '.jpeg', '.gif'];
        const defaultImg = 'defaul-image.png';
        if (!imageUser) {
            form.image.src = defaultImg;
            form.image.classList.remove('is-invalid');
            form.image.classList.add('is-valid');
        } else {
            const fileExtension = imageUser.slice(imageUser.lastIndexOf('.')).toLowerCase();
            if (!extensions.includes(fileExtension)) {
                errors.push({ name: 'image', message: 'Extension de archivo no permitida' });
                form.image.classList.add('is-invalid');
            } else {
                form.image.classList.remove('is-invalid');
                form.image.classList.add('is-valid');
            }
        }

        if (!addressUser) {
            errors.push({ name: 'address', message: 'Debes escribir tu dirección' });
            form.address.classList.add('is-invalid');
        } else if (addressUser.length < 5 || addressUser.length > 20) {
            errors.push({ name: 'address', message: 'La dirección debe tener entre 5 y 20 caracteres' });
            form.address.classList.add('is-invalid');
        } else if (!/^[a-zA-Z0-9\s\W]+$/.test(addressUser)) {
            errors.push({ name: 'address', message: '' });
            form.address.classList.add('is-invalid');
        } else {
            form.address.classList.remove('is-invalid');
            form.address.classList.add('is-valid')
        }


        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailUser) {
            errors.push({ name: 'email', message: 'Debes escribir tu email' });
            form.email.classList.add('is-invalid');
        } else if (!validEmail.test(emailUser)) {
            errors.push({ name: 'email', message: 'Debes ingresar un correo electrónico válido' });
            form.email.classList.add('is-invalid');
        } else {
            form.email.classList.remove('is-invalid');
            form.email.classList.add('is-valid')
        }

        if (!form.password.value) {
            errors.push({ name: 'password', message: 'Debes escribir tu contraseña' });
            form.password.classList.add('is-invalid');
        } else {
            form.password.classList.remove('is-invalid');
            form.password.classList.add('is-valid')
        }

        errors.forEach(error => {
            const errorLabel = document.getElementById('error-' + error.name);
            errorLabel.innerHTML = error.message;
        });
        if (errors.length === 0) {
            form.submit();
        }
    })
}
