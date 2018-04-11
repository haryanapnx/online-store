const express = require('express');
const userRouter = express.Router();
const user_service = require('../service/user_service');

    userRouter.post('/users/register', async function(req, res) {
        await user_service.create(req.body).then(newUser => {res.json(newUser);})
    });

    userRouter.get('/users/:id', async function(req, res) {
        await user_service.read(req.params.id).then(user =>{res.json(user) })
    })
    
    userRouter.get('/users', async function(req, res) {
        await user_service.read().then(user => {res.json(user) })
    });

    userRouter.put('/users/update/:id', async function(req, res){
        await user_service.update(req.body,req.params.id).then(update => {res.json(update);})
    });

    userRouter.delete('/users/delete/:id', async function(req, res) {
        await user_service.delete(req.params.id).then(deleted => {res.json(deleted);});      
    });
module.exports = userRouter;