const User = require('../controllers/userController');

async function userLogged(req, res, next) {
    // TODO: aca tenemos que hacer la validación de las variables de sesión para saber si el usuario esta logueado
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = await User.findByEmail(emailInCookie);
     console.log(userFromCookie);
    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }
    
    
    if(req.session && req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    

    next();
}

module.exports=userLogged;