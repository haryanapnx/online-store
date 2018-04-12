const users = require('../../database/models').user;
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

module.exports = {
        
    auth(params){
       return users.find({where:{email:params.email,password:params.passport}})
        .then(aut =>{
            if(aut){
                console.log('berhasil login');
                return aut.dataValues.id;
            }else{ 
                return 'gagal login'}
        })		      
    },

    create(params){
        return users.create({
            username: params.username,
            password: params.password,
            email: params.email           
        });
    },

    read(params){
        if (!params) {
            return users.findAll();
        } else {
            return users.findAll({
                where: { id:params }
            });  
        }  
    },

    update(params,id_params){
        return users.update({
            username: params.username,
            password: params.password,
            email: params.email,
            address: params.address,
            phone: params.phone,},{
            where: {id: id_params}
        });
    },

    delete(params){
        return users.destroy({
            where: {id: params}
        });        
    }
}


