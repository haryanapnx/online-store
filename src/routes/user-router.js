const express = require('express');
const db = require('../../database/models');
const userRouter = express.Router();
// const Op = Sequelize.Op;


userRouter.get('/users', async function(req, res) {
  try{  
    let user = await db.user.findAll();
    res.json(user);
    res.send(user);
    } 
    catch (error) {
          console.error(error);
    }
});

userRouter.put('/users/update/:id', async function(req, res){

       let username = req.body.username;
       let password = req.body.password;
       let email = req.body.email;
       let address = req.body.address;
       let phone = req.body.phone;
       let role = req.body.role;        
       
    const id = req.params.id;
    await db.user.find({
        where: { id: id }
    })   
      .then(user => {
        db.user.update({
            username: username,
            password: password,
            email: email,
            address: address,
            phone: phone,
            role: role
       })
      })
      .then(user => {
        res.json(user);
      });
  });

userRouter.delete('/user/delete/:id', async function(req, res) {
    const id = req.params.id;
    await db.user.destroy({
      where: { id: id }
    })
      .then(deletedUser => {
        res.json(deletedUser,console.log("User Berhasil dihapus !"));
      });      
  });

userRouter.post('/user/create', async function(req, res) {

    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let address = req.body.address;
    let phone = req.body.phone;
    let role = req.body.role;
    await db.user.create({
        username: username,
        password: password,
        email: email,
        address: address,
        phone: phone,
        role: role
    })
        .then(newUser => {
        res.json(newUser);
        })
});

userRouter.get('/users/:id', async function(req, res) {
    const id = req.params['id']
    let user = await db.user.findAll({
        where: { id: id }
    })
    res.send(user)
})

module.exports = userRouter;