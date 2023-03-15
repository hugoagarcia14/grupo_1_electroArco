

function userLogged(req, res, next) {
    // TODO: aca tenemos que hacer la validación de las variables de sesión para saber si el usuario esta logueado
    if(!req.query.admin){
       return res.redirect('/login')
    }
    next();
}

module.exports=userLogged;