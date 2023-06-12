const express = require('express');

const path = require('path');

const { body } = require('express-validator');

const validations = [
    body('first_name').notEmpty().withMessage('Debes escribir tus nombres'),
    body('last_name').notEmpty().withMessage('Debes escribir tus apellidos'),
    body('phone').notEmpty().withMessage('Debes escribir tu número de teléfono'),
    body('dni').notEmpty().withMessage('Debes escribir tu número de identificación'),
    body('email').notEmpty().withMessage('Debes escribir tu email').bail()
    .isEmail().withMessage('Debes escribir un correo válido'),
    body('password').notEmpty().withMessage('Debes escribir tu contraseña'),
    body('image').custom((value,  { req }) => {
        let file = req.file;
        let accepteExtnsions= ['.jpg','.png', '.jpeg', '.gif'];

         if(file) {
            let fileExtension = path.extname(file.originalname);
            if (!accepteExtnsions.includes(fileExtension)){
                throw new Error(`Las extensiones de archivos permitidas son ${accepteExtnsions.join(' ,')}`);
            }
        }
        return true;
    })
]

module.exports = validations;