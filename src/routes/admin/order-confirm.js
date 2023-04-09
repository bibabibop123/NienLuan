const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('admin/order-confirm',{layout:'admin'});
})
module.exports = router;