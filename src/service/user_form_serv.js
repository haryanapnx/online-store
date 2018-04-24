const users = require('../../database/models').user;

module.exports = {
        
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
            
            attributes:['username'],
            where:{username:params.username}
        })
    },

}


