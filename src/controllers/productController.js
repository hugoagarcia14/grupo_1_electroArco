const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/product.json');
function getProducts() {
	return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}

const controller={
    productdetail:(req, res) => {
        const { id } = req.params;
		const products = getProducts();
		const product = products.find((element) => element.id === +id);
        res.render ('product/productdetail', { product })
    },
    productCart:(req, res) => {
        res.render ('product/productCart')
    },
    listProducts:(req, res) => {
        res.render ('product/listProducts')
    },
    formularioCreacionProductos:(req, res) => {
        res.render ('product/formCreationProduct')
    },
    editProduct:(req, res) => {
        res.render ('product/editProduct')
    },
    productdetail: (req, res) => {
		const { id } = req.params;
		const products = getProducts();
		const product = products.find((element) => element.id === +id);
		res.render('productdetail', { product });
	},
    store: (req, res) => {
		const image = req.file ? req.file.filename : 'default-image.png';
		const products = getProducts();
		const newProduct = {
			id: products[products.length - 1].id + 1,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image
		};
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/listProducts');
	},

};

module.exports = controller;