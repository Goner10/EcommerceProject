const express = require('express');
const ClientController = require('../controllers/ClientController')
const router = express.Router();



router.post('/createClient',ClientController.createClient)
router.post('/login',ClientController.login)




module.exports = router;