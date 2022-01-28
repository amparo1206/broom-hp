const { User, Token } = require('../models/index');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development'];

const UserController = {
    create(req, res) {
        req.body.role = "user";
        User.create({ ...req.body })
        .then(user => res.status(201).send({ message: 'User successfully created', user }))
        .catch(console.error)
    },
    async update(req, res) {
        try {
          await User.update(
            { ...req.body },
            {
              where: {
                id: req.params.id,
              },
            }
          );
          res.send("User successfully updated");
        } catch (error) {
          console.error(error);
          res
            .status(500)
            .send({ message: "Unable to update user" });
        }
    },
    async delete(req, res) {
        try {
            await User.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.send(
                'The user has been successfully deleted'
            )
        } catch (error) {
            console.error(error)
            res.status(500).send({message:"There was a problem deleting the user"})
        }
    },
    login(req, res) {
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (!user) {
                return res.status(400).send({ message: "Incorrect login or password" })
            }
            const isMatch = bcrypt.compareSync(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send({ message: "Incorrect login or password" })
            }
            token = jwt.sign({ id: user.id }, jwt_secret);
            Token.create({ token, UserId: user.id });
            res.send({ message: 'Welcome' + user.name, user, token });
        })
    },
    async logout(req, res) {
        try {
            await Token.destroy({
                where: {
                    [Op.and]: [
                        { UserId: req.user.id },
                        { token: req.headers.authorization }
                    ]
                }
            });
            res.send({ message: 'Successfully disconnected' })
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'There was a problem connecting' })
        }
    },
}

module.exports = UserController;