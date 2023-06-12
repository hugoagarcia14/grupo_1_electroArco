const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require("../database/models");
const { validationResult } = require('express-validator');
const { Op } = require('sequelize');


function getProducts() {
	return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}

const controller = {


	formCreationProduct: (req, res) => {
		res.render('product/formCreationProduct')
	},

	productdetail: async (req, res) => {

		const product = await db.Product.findByPk(req.params.id);
		res.render('product/productdetail', { product })
	},

	productCart: (req, res) => {
		res.render('product/productCart')
	},

	editProduct: async (req, res) => {
		const id = req.params.id;
		try {
			const product = await db.Product.findByPk(id);
			res.render('product/editProduct', { product: product });
		} catch (error) {
			res.send(error);
		}
	},
	update: async (req, res) => {
		const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('product/editProduct', {
                errors: resultValidation.mapped(),
                oldData: req.body,
				product: {...req.body, id:req.params.id}
            });
        }
		try {
			const product = await db.Product.findByPk(req.params.id);
			const image = req.file ? req.file.filename : product.image;
			product.name = req.body.name;
			product.description = req.body.description;
			product.color = req.body.color;
			product.price = req.body.price;
			product.discount = req.body.discount;
			product.category = req.body.category;
			product.image = image
			await product.save()

			res.redirect('/');
		} catch (error) {
			console.log(error)
			res.send(error);
		}
	},


	store: async (req, res) => {
		
		const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('product/formCreationProduct', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
		try {
			const image = req.file ? req.file.filename : 'default-image.png';
			await db.Product.create({
				name: req.body.name,
				price: req.body.price,
				discount: req.body.discount,
				category: req.body.category,
				color: req.body.color,
				description: req.body.description,
				image
			});

			return res.redirect('/');
		} catch (error) {
			res.send(error);
		}
	},


	destroy: function (req, res) {
		let productId = req.params.id;
		db.Product
			.destroy({ where: { id: productId }, force: true })
			.then(() => {
				return res.redirect('/')
			})
			.catch(error => res.send(error))
		}
};

module.exports = controller;