const express = require('express');
const userRouter = express.Router();
const user_service = require('../service/user_service');
const path = require('path');

userRouter.post('/users/register/input', async function (req, res) {
    await user_service.create(req.body).then(newUser => { res.json(newUser); }).then(() => { res.redirect('/users/login') })
});

userRouter.get('/profil', function (req, res) {
    res.sendFile('profil.html', { root: path.join(__dirname, '../views/') });
});

userRouter.get('/', function (req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../views/') });
});

userRouter.post('/logout', async function (req, res) {
    await user_service.logout(req.session).then(user => { res.json(user) })
});

userRouter.get('/home/', function (req, res) {
    res.sendFile('home.html', { root: path.join(__dirname, '../views/') });
});

userRouter.get('/users/register', function (req, res) {
    res.sendFile('register.html', { root: path.join(__dirname, '../views/') });
});

userRouter.post('/users/validate_email', async function (req, res) {
    await user_service.validate_email(req.body).then(user => { res.json(user) })
});

userRouter.post('/users/validate_username', async function (req, res) {
    await user_service.validate_email(req.body).then(user => { res.json(user) })
});

userRouter.post('/users/auth', async function (req, res) {
    await user_service.auth(req.body).then(user => { res.json(user) })
});

userRouter.get('/users/:id', async function (req, res) {
    await user_service.read(req.params.id).then(user => { res.json(user) }).then(() => { res.redirect('/') });
})

userRouter.get('/users', async function (req, res) {
    await user_service.read().then(user => { res.json(user) })
});

userRouter.get('/', async function (req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../views/') });
});

userRouter.put('/users/update/:id', async function (req, res) {
    await user_service.update(req.body, req.params.id).then(update => { res.json(update); }).then(() => { res.redirect('/users') })
});

userRouter.delete('/users/delete/:id', async function (req, res) {
    await user_service.delete(req.params.id).then(deleted => { res.json(deleted); });
});

module.exports = userRouter; 