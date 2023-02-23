const controller = {
    index:(req, res) => {
        res.render ('home')
    },
    register:(req, res) => {
        res.render ('register')
    },
    productdetail:(req, res) => {
        res.render ('productdetail')
    },
    productCart:(req, res) => {
        res.render ('productCart')
    },
    login:(req, res) => {
        res.render ('login')
    },
    formularioCreacionProductos:(req, res) => {
        res.render ('formCreationProduct')
    },
    editProduct:(req, res) => {
        res.render ('editProduct')
    },
}





module.exports = controller;

