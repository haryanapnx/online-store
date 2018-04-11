const express = require('express');
const db = require('../../database/models');

const productRouter = express.Router();

productRouter.get('/products', async function(req, res) {
    res.json(await db.product.findAll());
})

productRouter.get('/products/:id', async function(req, res) {
    // console.log(req.params)
    const id = req.params['id']
    let product = await db.product.findAll({
        where: {
            id: id
        }
    })
    res.send(product)
    // res.json(await db.product.findAll());
})

module.exports = productRouter;