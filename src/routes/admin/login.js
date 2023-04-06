const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    console.log('login');
    // res.send('login');
    res.render('admin/login',{layout:'admin'});
})
module.exports = router;