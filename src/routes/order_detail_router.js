const express = require('express');
const orderDetail = express.Router();
const order_detail_serv = require('../service/order_detail_serv');

    orderDetail.post('/products/checkout', async function(req, res) {
        await order_detail_serv.checkout(req.body).then(newproduct => {res.json(newproduct);})
    });

module.exports = orderDetail;