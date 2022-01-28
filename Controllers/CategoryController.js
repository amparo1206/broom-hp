const { Comic, Category, Sequelize } = require('../models/index.js');
const { Op } = Sequelize;

const CategoryController = {
    create(req, res) {
        Category.create({ ...req.body })
        .then(category => res.send(category))
        .catch(err => console.ellor(err))
    },
    getAll(req,res){
        Category.findAll({
            include: [{model: Broom, as: 'brooms', through: {attributes: []}}]
        })
        .then(categories => res.send(categories))
        .catch(err => {
            console.log(err)
            res.status(500).send({ message: 'There was a problem loading the categories' })
        })
    },
    getById(req, res) {
        Category.findByPk(req.params.id)
            .then(category => res.send(category))
            .catch(err => {
                console.error(err)
                res.status(500).send({ message :'Category could not be loaded'})
            })
    },
    getOneByName(req, res) {
        Category.findOne({
                where: {
                    name: {
                        [Op.like]: `%${req.params.name}%`
                    }
                }
            })
            .then(category => res.send(category))
            .catch(err => {
                console.error(err)
                res.status(500).send({ message :'Category could not be loaded'})
            })
    },
    async delete(req, res) {
        try {
            await Category.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.send(
                'Category successfully eliminated'
            )
        } catch (error) {
            console.error(error)
            res.status(500).send({ message :'Category could not be deleted'})
        }
        
    },
}

module.exports = CategoryController;