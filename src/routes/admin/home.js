const express = require('express');
const router = express.Router();
const adminHomeController = require('./../../app/controllers/AdminHomeController');

router.get('/', adminHomeController.home);
router.get('/product/detail/:id',adminHomeController.detailCourses);
router.put('/:id',adminHomeController.updateCourse);
module.exports = router;