const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('admin/detail-order',{layout:'admin'});
})
module.exports = router;