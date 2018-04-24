const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const session = require('express-session');
const exphbs = require('express-handlebars')

const userRouter = require('./src/routes/user-router');
const productRouter = require('./src/routes/product-router');

const order = require('./src/routes/order_router');

//untuk mendapatkan body dan di parsing / di tampilkan dlm bentuk json (agar mudah dikerjakan)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('src/views'))
app.use(express.static('src/js'))
//mengatur session dengan modul pasport dan express-session


//For Handlebars/ menghandle file hbs, sama seperti pug, untuk menampilkan html ke browser
app.set('views', './src/views')
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(userRouter);
app.use(productRouter);

app.use(order);

app.listen(9999, function(){console.log("server is running on port 9999")});