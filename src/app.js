//Express
const express = require('express');
const { resolve } = require('path');
const app = express();
const cors = require('cors')




app.use(express.urlencoded({extended: false}));

//session

const session = require('express-session');

const cookies = require('cookie-parser');

//Multer
const methodOverride =  require('method-override');

//Path
const path = require('path');
const { editProduct, productdetail } = require('./controllers/productController');
const { adminUser, editUser, detail } = require('./controllers/userController');
//const publicPath = path resolve(__dirname, './public')

//Ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//Server
const port = process.env.PORT || 3000;

app.use(cors())

app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(cookies());

const userLogged = require('./middlewares/userLogged');

app.use(session({
    secret:'secret',
    resave: false,
    saveUninitialized:false,
}));


app.use(userLogged);
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
//Routes Api
const apiUsersRouter = require('./routes/api/userRouter');
const apiProductsRouter = require('./routes/api/productRouter');

//Route main
app.use(mainRouter);
app.use(productRouter);
//app.use(productdetail);
app.use(userRouter);
app.use('/admin',adminRouter);
app.use('/detail', userRouter);
app.use('/products', productRouter);
app.use('/api/users',apiUsersRouter);
app.use('/api/products',apiProductsRouter);
//app.use(editUser);
app.use((req,res, next)=>{
    res.status(404).render('404/404')
})




