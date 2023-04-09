const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('admin/order-cancel',{layout:'admin'});
})
module.exports = router;