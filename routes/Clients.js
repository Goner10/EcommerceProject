const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ClientController')

const {authentication} = require('../middlewares/authentication')



router.post('/createClient', ClientController.createClient)
router.post('/login', ClientController.login)
router.delete('/logout', authentication, ClientController.logout);



module.exports = router;