const express = require('express');

const path = require('path');

const { body } = require('express-validator');

const validationsProduct = [
    body('name')
    .notEmpty().withMessage('Debes escribir el nombre del producto')
    .isLength({min:5}).withMessage('El nombre del producto debe tener al menos 5 caracteres'),

    body('description')
    .notEmpty().withMessage('Debes escribir la descripcion del producto')
    .isLength({min:20}).withMessage('El nombre del producto debe tener al menos 20 caracteres'),

    body('price')
    .notEmpty().withMessage('Debes ingresar el precio'),

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

module.exports = validationsProduct;