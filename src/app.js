const mainRouter = require('./routes/main')
const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', mainRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on: http://localhost:${port}`);
});


