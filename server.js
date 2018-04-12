const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const exphbs = require('express-handlebars')

const userRouter = require('./src/routes/user-router');
const productRouter = require('./src/routes/product-router');

//untuk mendapatkan body dan di parsing / di tampilkan dlm bentuk json (agar mudah dikerjakan)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//mengatur session dengan modul pasport dan express-session
app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized:true}));// session secret
app.use(passport.initialize());
app.use(passport.session());

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

app.listen(9999, function(){console.log("server is running on port 9999")});