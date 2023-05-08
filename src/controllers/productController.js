const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require("../database/models");
const { Op } = require('sequelize');

/*const productsFilePath = path.join(__dirname, '../data/product.json');*/
function getProducts() {
	return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}

const controller={


	formCreationProduct:(req, res) => {
        res.render ('product/formCreationProduct')
    },

    productdetail:(req, res) => {
        const { id } = req.params;
		const products = getProducts();
		const product = products.find((element) => element.id == id);
        res.render ('product/productdetail', { product })
    },

    productCart:(req, res) => {
        res.render ('product/productCart')
    },
   
    editProduct:(req, res) => {
		const id = req.params.id;
        const products = getProducts();
        const product = products.find(product => product.id == id);
		res.render('product/editProduct', { 
			 product });
    },
	update: (req, res) => {
		const id = req.params.id;
		const products = getProducts();
		const productIndex = products.findIndex(product => product.id == id);
		const image = req.file ? req.file.filename : products[productIndex].image;
		products[productIndex] = {
			...products[productIndex],
			name: req.body.name,
			color: req.body.color,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image
		};
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/');
	},
    store: (req, res) => {
		const image = req.file ? req.file.filename : 'default-image.png';
		/*const products = getProducts();
		const newProduct = {
			id: products[products.length - 1].id + 1,*/
		db.Product.create({name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			color:req.body.color,
			description: req.body.description,
			image
		})
			
		
		/*products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));*/
		res.redirect('/');
	},

	destroy: (req, res) => {
        const id = req.params.id;
        const products = getProducts();
        const product = products.findIndex(product => product.id == id);
        products.splice(product, 1);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
        res.redirect('/');
    }
	

};

module.exports = controller;