// usuarios, agregar usuario y login
const express = require('express');
const path = require('path');

const controller={
    login:(req, res) => {
    res.render ('users/login')
    },
    register:(req, res) => {
        res.render ('users/register')
        },
}
module.exports = controller;