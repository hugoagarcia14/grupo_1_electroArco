const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require("../database/models");
const { Op } = require('sequelize');

/*const productsFilePath = path.join(__dirname, '../data/product.json');*/
function getProducts() {
	return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}

const controller = {


	formCreationProduct: (req, res) => {
		res.render('product/formCreationProduct')
	},

	productdetail: async (req, res) => {
		/*const { id } = req.params;
		const products = getProducts();
		const product = products.find((element) => element.id == id);*/

		const product = await db.Product.findByPk(req.params.id);
		res.render('product/productdetail', { product })
	},

	productCart: (req, res) => {
		res.render('product/productCart')
	},

	editProduct: async (req, res) => {
		const id = req.params.id;
		/*const products = getProducts();
		const product = products.find(product => product.id == id);*/
		try {
			const product = await db.Product.findByPk(id);
			res.render('product/editProduct', { Product: product });
		} catch (error) {
			res.send(error);
		}
	},
	update: function (req, res) {
		const id = req.params.id;
		/*const products = getProducts();
		const productIndex = products.findIndex(product => product.id == id);
		const image = req.file ? req.file.filename : products[productIndex].image;
		products[productIndex] = {
			...products[productIndex],*/
		db.Product.update(
		{
			name: req.body.name,
			color: req.body.color,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image
		},
		{
			where: { id: id }
		})
	.then(() => {
				return res.redirect('/')
			})
			.catch(error => res.send(error))
	},

	/*fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));*/


	store: function (req, res) {
		const image = req.file ? req.file.filename : 'default-image.png';
		/*const products = getProducts();
		const newProduct = {
			id: products[products.length - 1].id + 1,*/

		db.Product.create(
			{
				name: req.body.name,
				price: req.body.price,
				discount: req.body.discount,
				category: req.body.category,
				color: req.body.color,
				description: req.body.description,
				image
			}
		)
			.then(() => {
				return res.redirect('/');
			})
			.catch(error => res.send(error))


		/*products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));*/

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