const express = require('express'); 
const userRouter = express.Router(); 
const user_service = require('../service/user_service'); 
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy; 

userRouter.post('/users/input', async function (req, res) {
await user_service.create(req.body).then(newUser =>  {res.json(newUser); }).then(() =>  {res.redirect('/users/login')})
}); 

userRouter.get('/users/register', function (req, res) {
    res.render('../views/register.hbs');
});

userRouter.get('/users/login', function (req, res) {
    res.render('../views/login.hbs');
});

userRouter.post('/users/auth', async function (req, res) {
    await user_service.auth(req.body).then(newUser =>  { res.json(newUser);}).then((red)=> {res.redirect('/products')})  
    }); 
    
userRouter.get('/users/:id', async function (req, res) {
await user_service.read(req.params.id).then(user =>  {res.json(user)}).then(() =>  {res.redirect('/')}); 
})

userRouter.get('/users', async function (req, res) {
await user_service.read().then(user =>  {res.json(user)})
}); 

userRouter.put('/users/update/:id', async function (req, res) {
await user_service.update(req.body, req.params.id).then(update =>  {res.json(update); }).then(() =>  {res.redirect('/users')})
}); 

userRouter.delete('/users/delete/:id', async function (req, res) {
await user_service.delete(req.params.id).then(deleted =>  {res.json(deleted); }); 
}); 
module.exports = userRouter; 