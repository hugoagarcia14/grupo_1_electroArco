window.onload=function(){

    //let titulo = document.querySelector('.moviesAddTitulo')
    const form = document.querySelector('.form-horizontal');
    
    //let article = document.querySelector('article');
    //titulo.innerHTML = 'AGREGAR PELÍCULA';
    //titulo.classList.add('titulo');
    //article.classList.add('fondoTransparente');
    //formulario.classList.add('fondoCRUD');
  
    form.first_name.focus();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const allErrorLabels = document.querySelectorAll('.error-message');
        allErrorLabels.forEach(element => {
            element.innerHTML = '';
        });
        const errors = [];
        if (!form.first_name.value){
            errors.push({name:'first_name', message: 'Este campo no debe estar vacio'});
            form.first_name.classList.add('is-invalid');
        }else {
            form.first_name.classList.remove('is-invalid');
            form.first_name.classList.add('is-valid')
        }
        if (!form.last_name.value){
            errors.push({name:'last_name', message: 'Debes escribir tus apellidos'});
            form.last_name.classList.add('is-invalid');
        }else {
            form.last_name.classList.remove('is-invalid');
            form.last_name.classList.add('is-valid')
        }
        if (!form.phone.value){
            errors.push({name:'phone', message: 'Debes escribir tu número de teléfono'});
            form.phone.classList.add('is-invalid');
        }else {
            form.phone.classList.remove('is-invalid');
            form.phone.classList.add('is-valid')
        }
        if (!form.dni.value){
            errors.push({name:'dni', message: 'Debes escribir tu número de identificación'});
            form.dni.classList.add('is-invalid');
        }else {
            form.dni.classList.remove('is-invalid');
            form.dni.classList.add('is-valid')
        }
        if (!form.image.value){
            errors.push({name:'image', message: 'Seleccione un archivo'});
            form.image.classList.add('is-invalid');
        }else {
            form.image.classList.remove('is-invalid');
            form.image.classList.add('is-valid')
        }
        if (!form.address.value){
            errors.push({name:'address', message: 'Debes escribir tu dirección'});
            form.address.classList.add('is-invalid');
        }else {
            form.address.classList.remove('is-invalid');
            form.address.classList.add('is-valid')
        }
        if (!form.email.value){
            errors.push({name:'email', message: 'Debes escribir tu email'});
            form.email.classList.add('is-invalid');
        }else {
            form.email.classList.remove('is-invalid');
            form.email.classList.add('is-valid')
        }
        if (!form.password.value){
            errors.push({name:'password', message: 'Debes escribir tu contraseña'});
            form.password.classList.add('is-invalid');
        }else {
            form.password.classList.remove('is-invalid');
            form.password.classList.add('is-valid')
        }
        errors.forEach(error => {
            const errorLabel = document.getElementById('error-' + error.name);
            errorLabel.innerHTML = error.message;
        });
        if(errors.length === 0){
            form.submit();
        }

    });


}