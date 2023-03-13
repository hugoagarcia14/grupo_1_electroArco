// usuarios, agregar usuario y login
const fs = require('fs');
const path = require('path');
const userFilePath = path.join(__dirname, '../data/users.json');

function getUser() {
	return JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
}

const controller = {
    login: (req, res) => {
        res.render('users/login')
    },
    register: (req, res) => {
        res.render('users/register')
    },
    adminUser: (req, res) => {
        const users = getUser();
        res.render('users/adminUser', {
            users
        })
    },
    editUser: (req, res) => {
        res.render('users/editUser')
    },

}
module.exports = controller;