// usuarios, agregar usuario y login
const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const userFilePath = path.join(__dirname, '../data/users.json');



function getUser() {
    return JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
}

const controller = {
    getData: function () {
        return JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
    },
    findAll: function () {
        return this.getData();
    },
    login: (req, res) => {
        res.render('users/login')
    },
    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;

    },
    findByField: function (field, text) {
        let allUser = this.findAll();
        let userFound = allUser.find(oneUser => oneUser[field] === text);
        return userFound;
    },
    loginProcess: (req, res) => {
        
        let userToLogin = controller.findByField('email', req.body.email);
            console.log(userToLogin);
        
        if(userToLogin){
            let isOkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(isOkPassword){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                return res.redirect('/users/profile');

            }return res.render('users/login',{
                errors:{
                    email:{
                        msg:'Las credenciales son inválidas'
                    }
                }
            });
        }

        return res.render('users/login',{
            errors:{
                email:{
                    msg:'No se encuentra este correo registrado'
                }
            }
        });  
    },

    register: (req, res) => {
        res.render('users/register')
    },
    profile: (req, res) => {
        res.render('users/profile',{
            
        })
    },

    store: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let userInDB = controller.findByField('email', req.body.email);
       
        if (userInDB) {
            return res.render('users/register', {
                errors: {
                    email: {
                        msg: 'Este correo ya esta registrado, intente con otro correo'
                    }
                },
                oldData: req.body
            });
        }
        
        const image = req.file ? req.file.filename : 'defaul-image.png';
        const users = getUser();

        const newUser = {
            id: users[users.length - 1].id + 1,
            id_user: req.body.id_user,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            image: image,
            email: req.body.email,
            phone: req.body.phone,
            password: bcryptjs.hashSync(req.body.password, 10)
        }
        users.push(newUser);
        fs.writeFileSync(userFilePath, JSON.stringify(users, null, ' '));
        res.redirect('/login')
    },
    adminUser: (req, res) => {
        const users = getUser();
        res.render('users/adminUser', {
            users
        })
    },
    detail: (req, res) => {
        const id = req.params.id;
        const users = getUser();
        const user = users.find(user => user.id == id);
        res.render('users/cardUser', {
            user
        });
    },
    editUser: (req, res) => {
        const id = req.params.id;
        const users = getUser();
        const user = users.find(user => user.id == id);
        res.render('users/editUser', {
            user
        });
    },
    update: (req, res) => {
        const id = req.params.id;
        const users = getUser();
        const userIndex = users.findIndex(user => user.id == id);
        const image = req.file ? req.file.filename : users[userIndex].image;
        users[userIndex] = {
            ...users[userIndex],
            id_user: req.body.id_user,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            image: image,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        }
        fs.writeFileSync(userFilePath, JSON.stringify(users, null, ' '));
        res.redirect('/admin/adminUser?admin=true');
    },
    destroy: (req, res) => {
        const id = req.params.id;
        const users = getUser();
        const userIndex = users.findIndex(user => user.id == id);
        users.splice(userIndex, 1);
        fs.writeFileSync(userFilePath, JSON.stringify(users, null, ' '));
        res.redirect('/admin/adminUser?admin=true');
    },
   



}
module.exports = controller;

//console.log (controller.findByField('email','hugoagarcia14@hotmail.com'));