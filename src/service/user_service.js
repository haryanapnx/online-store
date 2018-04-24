const users = require('../../database/models').user;
const Chance = require('chance')

const chance = new Chance()

module.exports = {

    create(params){
        return users.create({
            username: params.username,
            password: params.password,
            email: params.email,
            address: params.address,
            phone: params.phone,
            token: chance.string({length:30})         
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
            phone: params.phone,
            token: params.token   
        },{
            where: {id: id_params}
        });
    },

    delete(params){
        return users.destroy({
            where: {id: params}
        });        
    },

    auth(params){
        return users.find({where:{username:params.username,password:params.password}})
         .then(aut =>{
             if(aut){
                 console.log('berhasil login');
                 return aut.dataValues.id;
             }else{ 
                return ("gagal login")}
         })		      
     },
     validate_email(params){
         return users.findOne({
             
             attributes:['email'],
             where:{email:params.email}
         })
     },
     validate_username(params){
         return users.findOne({
             
             attributes:['email'],
             where:{username:params.email}
         })
     },
     
     auth(params){
        return users.find({
            where:{email:params.email,password:params.password}});      
     }, 

     logout(params){
        return users.destroy({
            where: {id: params}
        });        
    }
}


