//Express
const express = require('express');
const { resolve } = require('path');
const app = express();

//Multer
//const methodOverride =  require('method-override');

//Path
const path = require('path');
const { editProduct, productdetail } = require('./controllers/productController');
const { adminUser, editUser } = require('./controllers/userController');
//const publicPath = path resolve(__dirname, './public')

//Ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//Server
const port = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());



//Public



//Start server
app.listen(port, () => {
    console.log(`Server started on: http://localhost:${port}`);
});

//Routes
const mainRouter = require('./routes/main');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/user');
const adminRouter= require('./routes/admin');


//Route main
app.use(mainRouter);
app.use(productRouter);
//app.use(productdetail);
app.use(userRouter);
app.use('/admin',adminRouter);
//app.use(adminUser);
//app.use(editUser);
app.use((req,res, next)=>{
    res.status(404).render('404/404')
})
//app.use('/product', listProducts);


