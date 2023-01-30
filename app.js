const express = require('express');
const path = require('path');
const app = express();

const publicPath= path.join(__dirname,'public');

const port = 3500;

app.use(express.static(publicPath));
app.listen(port, ()=>{
    console.log('server started on http://localhost:3500');
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