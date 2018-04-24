const express = require('express');
const productRouter = express.Router();
const product_service = require('../service/product_service');
const path = require('path');


    productRouter.post('/products/input', async function(req, res) {
        await product_service.create(req.body).then(newproduct => {res.json(newproduct);})
    });
    
    productRouter.get('/admin/products/form', function (req, res) {
        res.sendFile('produk.html', { root: path.join(__dirname, '../views/') });
    });

    productRouter.get('/admin/products/', function (req, res) {
        res.sendFile('list_produk.html', { root: path.join(__dirname, '../views/') });
    });

    productRouter.get('/admin/products/edit', function (req, res) {
        res.sendFile('edit_produk.html', { root: path.join(__dirname, '../views/') });
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