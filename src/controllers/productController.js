const express = require('express');
const path = require('path');

const controller={
    productdetail:(req, res) => {
        res.render ('product/productdetail')
    },
    productCart:(req, res) => {
        res.render ('product/productCart')
    },
    listProducts:(req, res) => {
        res.render ('product/listProducts')
    },
    formularioCreacionProductos:(req, res) => {
        res.render ('product/formCreationProduct')
    },
    editProduct:(req, res) => {
        res.render ('product/editProduct')
    },

};

module.exports = controller;