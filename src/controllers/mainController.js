const express = require('express');
const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/product.json');
function getProducts() {
	return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}

const controller = {
    index:(req, res) => {
        const products = getProducts()
        res.render ('main/home',{visited:products})
    },

   /*register:(req, res) => {
        res.render ('register')
    },
   
    login:(req, res) => {
        res.render ('login')
    },
    
    editProduct:(req, res) => {
        res.render ('editProduct')
    },
    homeAdmin:(req, res) => {
        res.render ('homeAdmin')
    },*/
}



//home

module.exports = controller;

