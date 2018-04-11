const express    = require("express");
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./src/routes/user-router');
const productRouter = require('./src/routes/product-router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(userRouter);
app.use(productRouter);

app.listen(9999, function(){console.log("server is running on port 9999")});