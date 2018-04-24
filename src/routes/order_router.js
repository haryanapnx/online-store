const express = require('express');
const order = express.Router();
const order_serv = require('../service/order_serv');

    order.post('/orders/create', async function(req, res) {
        let {id_user, data,total} = req.body
        let params = {id_user, data,total}
        const dat = await order_serv.create(params)
        return res.json(dat);      
    });

module.exports = order;