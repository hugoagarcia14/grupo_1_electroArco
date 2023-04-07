

function userLogged(req, res, next) {
    // TODO: aca tenemos que hacer la validación de las variables de sesión para saber si el usuario esta logueado

    res.locals.isLogged = false;
    
    if(req.session && req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    next();
}

module.exports=userLogged;