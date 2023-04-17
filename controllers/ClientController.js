
const { Client, Token, Sequelize, Op } = require('../models/index')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development']


const ClientController = {
    async createClient(req, res) {
        req.body.role = 'client'
        try {
            const password = await bcrypt.hash(req.body.password, 10)
            const bodyWithPasswordHashed = { ...req.body, password }
            const client = await Client.create(bodyWithPasswordHashed)
            res.status(201).send({ msg: "Usuario creado con éxito", client });
        } catch (error) {
            console.error(error);
            res.send(error)
        }

    },
    async login(req, res) {
        try {
            const client = await Client.findOne({
                where: {
                    email: req.body.email,
                },
            });
            if (!client) {
                return res
                    .status(400)
                    .send({ message: "Usuario o contraseña incorrectos" });
            }
            const isMatch = bcrypt.compareSync(req.body.password, client.password);
            if (!isMatch) {
                return res
                    .status(400)
                    .send({ message: "Usuario o contraseña incorrectos" });
            }
            const token = jwt.sign({ id: client.id }, jwt_secret);
            await Token.create({ token, ClientId: client.id });
            res.send({ token, message: `Bienvenido ${client.full_name}`, client });
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
    async logout(req, res) {
        try {
            await Token.destroy({
                where: {
                    [Op.and]: [
                        { ClientId: req.client.id },
                        { token: req.headers.authorization }
                    ]
                }
            })
            res.send({ message: 'Logged out successfully' })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'There was a problem while logging out' })
        }
    },
}

module.exports = ClientController;



