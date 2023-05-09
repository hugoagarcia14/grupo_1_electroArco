// usuarios, agregar usuario y login
const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const { Op } = require('sequelize');

/*const userFilePath = path.join(__dirname, '../data/users.json');*/



/*function getUser() {
    return JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
}*/

const controller = {
    getData: function () {
        /* return JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));*/
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
        /* let userFound = allUser.find(oneUser => oneUser[field] === text);
        return userFound;*/
    },
    loginProcess: (req, res) => {

        let userToLogin = controller.findByField('email', req.body.email);


        if (userToLogin) {
            let isOkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (isOkPassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if (req.body.remembre) {
                    res.cookie('userEmail', req.body.email, {
                        maxAge: (1000 * 60) * 2
                    })
                }

                return res.redirect('/');

            } return res.render('users/login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son inválidas'
                    }
                }
            });
        }

        return res.render('users/login', {
            errors: {
                email: {
                    msg: 'No se encuentra este correo registrado'
                }
            }
        });
    },

    register: (req, res) => {

        res.render('users/register')
    },
    profile: (req, res) => {
        res.render('users/profile', {

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

        /* const users = getUser();*/
        
        async (req, res) => {
            try {
                const image = req.file ? req.file.filename : 'defaul-image.png';
                const newUser = {
                    dni: req.body.dni,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    image: image,
                    email: req.body.email,
                    phone: req.body.phone,
                    password: bcryptjs.hashSync(req.body.password, 10),

                };
                await db.User.create(newUser);
                res.redirect('/login');
            } catch (error) {
                res.send(error);
            }

        }
    },
    adminUser: async (req, res) => {
        try {
            const user = await db.User.findAll();
            if (!user) {
                return res.status(404).json({ message: 'Usuarios no encontrados' });
            }
            res.render('users/adminUser', { user });
        } catch (error) {
            res.send(error);
        }
    },
    detail: async (req, res) => {
        try {
            const user = await db.User.findByPk(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.render('users/cardUser', { user });
        } catch (error) {
            res.send(error);
        }
    },
    editUser: async (req, res) => {
        try {
            const user = await db.User.findByPk(req.params.id);
            res.render('users/editUser', { User: user });
        } catch (error) {
            res.send(error);
        }
    },
    update: async (req, res) => {
        try {
            const user = req.params.id;
            const image = req.file ? req.file.filename : users[userIndex].image;
            const userUpdate = {
                dni: req.body.dni,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                image: image,
                email: req.body.email,
                phone: req.body.phone,
                password: bcryptjs.hashSync(req.body.password, 10),
                roles_id: req.body.roles_id
            };
            await db.User.update(userUpdate, { where: { id: user} });
            res.redirect('/admin/adminUser?admin=true');
        } catch (error) {
            res.send(error);
        }
    },
    destroy: function (req, res) {
        let userId = req.params.id;
        db.User
            .destroy({ where: { id: userId }, force: true })
            .then(() => {
                return res.redirect('/admin/adminUser?admin=true')
            })
            .catch(error => res.send(error))
    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }



}
module.exports = controller;

//console.log (controller.findByField('email','hugoagarcia14@hotmail.com'));