const controller = {
    index:(req, res) => {
        res.render ('home')
    },
    register:(req, res) => {
        res.render ('register')
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
    homeAdmin:(req, res) => {
        res.render ('homeAdmin')
    },
}





module.exports = controller;

