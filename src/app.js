//Express
const express = require('express');
const { resolve } = require('path');
const app = express();

//Multer
//const methodOverride =  require('method-override');

//Path
const path = require('path');
//const publicPath = path resolve(__dirname, './public')

//Ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Server
const port = process.env.PORT || 3000;

//Routes
const mainRouter = require('./routes/main');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/user');

//Public
app.use(express.static(path.join(__dirname,'public')));


//Start server
app.listen(port, () => {
    console.log(`Server started on: http://localhost:${port}`);
});

//Route main
app.use(mainRouter);
app.use(productRouter);
app.use(userRouter);
//app.use('/product', listProducts);


