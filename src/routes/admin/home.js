const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    console.log('login');
    res.get('admin/home',{layout:'admin'});
})
module.exports = router;