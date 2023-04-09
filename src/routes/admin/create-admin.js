const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('admin/create-admin',{layout:'admin'});
})
module.exports = router;