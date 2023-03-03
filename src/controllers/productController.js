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

};// edicion y creación de productos

module.exports = controller;