const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('admin/update-admin',{layout:'admin'});
})
module.exports = router;