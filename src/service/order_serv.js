const order = require('../../database/models').orders;
const orders_detail = require('../../database/models').orders_detail;
const axios = require('axios');
module.exports = {

    async create(params) {
        let ord = await order.create({
            id_user: params.id_user
        })
        // let ido = ord;
        // console.log(ord);

        await params.data.map(params => {
            orders_detail.create({
                id_order: ord.id,
                id_product: params.id,
                price: params.price,
                qty: params.qty
            })
        })

        let body = {
            "transaction_details": {
                "order_id": ord.id,
                "gross_amount": params.total
            }
        }
        const head = {
            'Accept': 'application/json',
            'Content-Type' : `application/json`,
            'Authorization': 'Basic U0ItTWlkLXNlcnZlci1FNEhKdXRLbVVmc0c5YTRtSXY5Q0hsNFU6'
        }

        const rest = await axios.post('https://app.sandbox.midtrans.com/snap/v1/transactions', body, {headers:head})
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        
        return rest
    }
}