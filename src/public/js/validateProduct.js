window.onload = function () {

    const form = document.querySelector('.products');

    form.name.focus();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const allErrorLabels = document.querySelectorAll('.error-message');
        allErrorLabels.forEach(element => {
            element.innerHTML = '';
        });
        const errors = [];
        const name = form.name.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;


        if (!name) {
            errors.push({ name: 'name', message: 'Debes escribir el nombre del producto' });
            form.name.classList.add('is-invalid');
        } else if (name.length < 5 || name.length > 60) {
            errors.push({ name: 'name', message: 'Los nombres deben tener entre 5 y 60 caracteres' });
            form.name.classList.add('is-invalid');
        } else if (!/^[a-zA-Z0-9\s]+$/.test(name)) {
            errors.push({ name: 'name', message: 'Los nombres deben contener solo letras y numeros' });
            form.name.classList.add('is-invalid');
        } else {
            form.name.classList.remove('is-invalid');
            form.name.classList.add('is-valid')
        }


        if (!description) {
            errors.push({ name: 'description', message: 'Debes escribir una descripcion' });
            form.description.classList.add('is-invalid');
       } else if (description.length < 20 || description.length > 800) {
          errors.push({ name: 'description', message: 'Debe tener almenos 20 caracteres.' });
            form.description.classList.add('is-invalid');
        } else if (!/^[a-zA-Z0-9\s.,!@#$%^&*()_-áéíóúÁÉÍÓÚñÑ]+$/.test(description)) {
            errors.push({ name: 'description', message: 'La caracteristica solo puede contener letras y numeros.' });
             form.description.classList.add('is-invalid');
        } else {
            form.description.classList.remove('is-invalid');
             form.description.classList.add('is-valid')
         }

         if (!price) {
            errors.push({ name: 'price', message: 'Debes agregar un precio' });
            form.price.classList.add('is-invalid');
        } else if(!/^(\d+|\d+.\d+)$/.test(price)) {
            errors.push({ name: 'price', message: 'Este campo solo acepta numeros y decimales' });
            form.price.classList.add('is-invalid');
        } else {
            form.price.classList.remove('is-invalid');
            form.price.classList.add('is-valid');
        }


       const extensions = ['.jpg', '.png', '.jpeg', '.gif'];
       const defaultImg = 'defaul-image.png';
        if (!image) {
             form.image.src = defaultImg;
             form.image.classList.remove('is-invalid');
            form.image.classList.add('is-valid');
         } else {
             const fileExtension = image.slice(image.lastIndexOf('.')).toLowerCase();
            if (!extensions.includes(fileExtension)) {
                errors.push({ name: 'image', message: 'Extencion no permitda.' });
                form.image.classList.add('is-invalid');
             } else {
                 form.image.classList.remove('is-invalid');
                form.image.classList.add('is-valid');
             }
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





