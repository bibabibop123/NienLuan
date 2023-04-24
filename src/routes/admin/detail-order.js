const express = require('express');
const router = express.Router();

const admindetailorderController = require('./../../app/controllers/AdminDetailOrderController');

// router.get('/', (req,res)=>{
//     res.render('admin/detail-order',{layout:'admin'});
// })

router.get('/:id', admindetailorderController.adminDetailOrder);
module.exports = router;