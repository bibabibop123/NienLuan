const express = require('express');
const router = express.Router();


const userController = require('../app/controllers/UserController');

router.use('/', userController.user)
module.exports = router;