const Products = require('../../database/models').product;

module.exports ={
    
    create(params){
        return Products.create({
            name: params.name,
            description: params.description,
            price: params.price,
            stock: params.stock
        });
    },

    read(params){
        if (!params) {
            return Products.findAll();
        } else {
            return Products.findAll({
                where: { id: params }
            });  
        }  
    },

    update(params,id_params){
        return Products.update({
            name: params.name,
            description: params.description,
            price: params.price,
            stock: params.stock,},{
                where: {id: id_params}
            });
    },

    delete(params){
        return Products.destroy({
            where: {id: params}
        });        
    }
}