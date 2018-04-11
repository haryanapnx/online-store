const express = require('express');
const productRouter = express.Router();
const product_service = require('../service/product_service');

    productRouter.post('/products/input', async function(req, res) {
        await product_service.create(req.body).then(newproduct => {res.json(newproduct);})
    });

    productRouter.get('/products/:id', async function(req, res) {
        await product_service.read(req.params.id).then(product =>{res.json(product);})
    })
    productRouter.get('/products', async function(req, res) {
        await product_service.read().then(product =>{res.json(product);})     
    });

    productRouter.put('/products/update/:id', async (req,res)=> {
        await product_service.update(req.body,req.params.id).then(update => {res.json(update);})
    });

    productRouter.delete('/products/delete/:id', async function(req, res) {
        await product_service.delete(req.params.id).then(deleted => {res.json(deleted);});      
    });

module.exports = productRouter;