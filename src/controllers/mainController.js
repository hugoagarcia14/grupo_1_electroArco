const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const { Op } = require('sequelize');

const productsFilePath = path.join(__dirname, '../data/product.json');
function getProducts() {
    return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}


const controller = {
    index: async (req, res) => {
        try {
            const product = await db.Product.findAll();
            if (!product) {
                return res.status(404).json({ message: 'Productos no encontrados' });
            }
            res.render('main/home', { product });
        } catch (error) {
            res.send(error);
        }
    }
    
}
module.exports = controller;

