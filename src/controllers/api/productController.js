const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const bcrypt = require('bcryptjs');

const productsAPIController = {
    'list': (req, res) => {
        const { search } = req.query
        let query
        if (search) {
            query = { name: { [Op.like]: `%${search}%` } }
        }
        db.Product.findAll({
            include: ['category'],
            where:query
        })

            .then(products => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: 'api/products'
                    },
                    data: products
                };
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: ['category']
        })
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: '/api/products/:id'
                    },
                    data: product
                }
                res.json(respuesta);
            });
    }
}

module.exports = productsAPIController;