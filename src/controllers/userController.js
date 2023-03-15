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
    store: (req, res) => {
        const image = req.file ? req.file.filename : 'defaul-image.png';
        const users = getUser();
        const newUser = {
            id: users[users.length - 1].id + 1,
            id_user:req.body.id_user,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            image: image,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        }
        users.push(newUser);
        fs.writeFileSync(userFilePath, JSON.stringify(users, null, ' '));
        res.redirect('/adminUser')
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