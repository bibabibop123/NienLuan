const express = require('express');
const router = express.Router();
const loginRouter = require('./login');
const homeRouter = require('./home');
router.use('/',homeRouter);
router.use('/login',loginRouter);
module.exports = router;