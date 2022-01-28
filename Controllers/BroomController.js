const { Broom, Category } = require('../models/index');


const BroomController = {
    create(req, res) {
        Broom.create({ ...req.body, BroomId: req.broom.id })
        .then(broom => res.status(201).send({ message: 'Broom creates success', broom }))
        .catch(console.error)
    },
    getAll(req, res) {
        Broom.findAll({
            include: [Category],
        })
            .then((broom) =>
                res
                    .status(200)
                    .send({ description: "All the brooms", broom })
            )
            .catch((err) => {
                console.error(err);
                res
                    .status(500)
                    .send({ message: "We don't have brooms" });
            });
    },
    getOneByName(req, res) {
        Broom.findone({
            where: {
                name: {
                    [Op.like]: `%${req.params.name}%`
                }
            }
        })
        .then(broom => res.send(broom))
            .catch(err => {
                console.error(err)
                res.status(500).send({message: 'The broom could not be loaded'})
        })
    },
    getById(req, res) {
        Broom.findByPk(req.params.id, {
            })
            .then(broom => res.send(broom))
            .catch(err => {
                console.error(err)
                res.status(500).send({ message :'The broom could not be loaded by id'})
            })
    },
    getAllByPrice(req, res) {
        Broom.findone({
            where: {
                price: {
                    [Op.like]: `%${req.params.price}%`
                }
            }
        })
        .then(broom => res.send(broom))
            .catch(err => {
                console.error(err)
                res.status(500).send({message: 'No broom price'})
        })
    },
    getAllOrder(req,res){
        Broom.findAll({
            include: [{model: Category, as: 'categories', through: {attributes: []}}],
            order: [
                ['price', 'DESC']
            ]
        })
        .then(brooms => res.send(brooms))
        .catch(err => {
            console.log(err)
            res.status(500).send({ message: 'There has been a problem loading the brooms' })
        })
    },
    async update(req, res) {
        try {
          await Broom.update(
            { ...req.body },
            {
              where: {
                id: req.params.id,
              },
            }
          );
          res.send("Broom successfully updated");
        } catch (error) {
          console.error(error);
          res
            .status(500)
            .send({ message: "Unable to update broom" });
        }
    },
    async delete(req, res) {
        try {
            await Broom.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.send({ message: 'The broom has been removed' })
        }
        catch (error) {
            console.error(err)
        }
    }
}

module.exports = BroomController;