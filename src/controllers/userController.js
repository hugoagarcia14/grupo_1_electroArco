// usuarios, agregar usuario y login
const express = require('express');
const path = require('path');

const controller = {
    login: (req, res) => {
        res.render('users/login')
    },
    register: (req, res) => {
        res.render('users/register')
    },
    adminUser: (req, res) => {
        res.render('users/adminUser')
    },
    editUser: (req, res) => {
        res.render('users/editUser')
    },

}
module.exports = controller;