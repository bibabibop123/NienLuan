const express = require('express');
const router = express.Router();


const changepassController = require('../app/controllers/ChangePassController');

router.use('/',changepassController.changePass)
module.exports = router;