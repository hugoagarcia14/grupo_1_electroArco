const express = require('express');
const path = require('path');
const app = express();

const publicPath= path.join(__dirname,'public');

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.listen(port, ()=>{
    console.log('server started on http://localhost:3000');
});

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'./views/home.html'));
});
app.get('/register',(req, res)=>{
    res.sendFile(path.join(__dirname,'./views/register.html'));
});
app.get('/productdetail',(req, res)=>{
    res.sendFile(path.join(__dirname,'./views/productdetail.html'));
});
app.get('/productCart',(req, res)=>{
    res.sendFile(path.join(__dirname,'./views/productCart.html'));
});
app.get('/login',(req, res)=>{
    res.sendFile(path.join(__dirname,'./views/login.html'));
});
app.get('/home',(req, res)=>{
    res.sendFile(path.join(__dirname,'./views/home.html'));
});
