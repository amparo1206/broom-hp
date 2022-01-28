const { Broom, Order } = require('../models/index.js');

const OrderController = {
    create(req,res){
        Order.create({...req.body})
        .then(order => res.send(order))
        .catch(err => console.error(err))
    },
    getAll(req,res){
        Order.findAll({
            include: [{model: Broom, as: 'brooms', through: {attributes: []}}]
        })
        .then(orders => res.send(orders))
        .catch(err => {
            console.log(err)
            res.status(500).send({ message: 'Problem loading orders' })
        })
    },
}

module.exports = OrderController;