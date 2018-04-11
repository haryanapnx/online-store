const users = require('../../database/models').user;

module.exports = {
    create(params){
        return users.create({
            username: params.username,
            password: params.password,
            email: params.email,
            address: params.address,
            phone: params.phone,
            role: params.role
        });
    },

    read(params){
        if (!params) {
            return users.findAll();
        } else {
            return users.findAll({
                where: { id: parseInt(params) }
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
            role: params.role,},{
            where: {id: id_params}
        });
    },

    delete(params){
        return users.destroy({
            where: {id: params}
        });        
    }
}


