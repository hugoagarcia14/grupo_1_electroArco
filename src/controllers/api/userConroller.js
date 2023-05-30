const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const bcrypt = require('bcryptjs');



const Users = db.User;
const usersAPIController = {
    'list': (req, res) => {
        db.User.findAll()
            .then(users => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: users.length,
                        url: 'api/users'
                    },
                    data: users
                }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: '/api/user/:id'
                    },
                    data: user
                }
                res.json(respuesta);
            });
    },
    create: (req, res) => {
        const image = req.file ? req.file.filename : 'defaul-image.png';
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        Users.create(
            {
                dni: req.body.dni,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                image: image,
                email: req.body.email,
                address: req.body.address,
                phone: req.body.phone,
                password: hashedPassword,
                roles_id: 3
            }
        )
            .then(confirm => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'api/users/create'
                        },
                        data: confirm
                    }
                } else {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'api/users/create'
                        },
                        data: confirm
                    }
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))
    },
    update: (req, res) => {
        let userId = req.params.id;
        const image = req.file ? req.file.filename : 'defaul-image.png';
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        Users.update(
            {
                dni: req.body.dni,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                image: image,
                email: req.body.email,
                address: req.body.address,
                phone: req.body.phone,
                password: hashedPassword,
            },
            {
                where: { id: userId }
            })
            .then(confirm => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'api/users/update/:id'
                        },
                        data: confirm
                    }
                } else {
                    respuesta = {
                        meta: {
                            status: 204,
                            total: confirm.length,
                            url: 'api/users/update/:id'
                        },
                        data: confirm
                    }
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))
    },
    destroy: (req, res) => {
        let userId = req.params.id;
        Users
            .destroy({ where: { id: userId }, force: true })
            .then(confirm => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'api/users/delete/:id'
                        },
                        data: confirm
                    }
                } else {
                    respuesta = {
                        meta: {
                            status: 204,
                            total: confirm.length,
                            url: 'api/users/delete/:id'
                        },
                        data: confirm
                    }
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error))
    }

}
module.exports = usersAPIController;