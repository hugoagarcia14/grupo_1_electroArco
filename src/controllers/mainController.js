const express = require('express');
const path = require('path');

const controller = {
    index:(req, res) => {
        res.render ('main/home')
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

