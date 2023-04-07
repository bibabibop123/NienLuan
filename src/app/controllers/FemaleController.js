const Course = require('../models/Course');

class FemaleController {
    async female ( req, res, next) {
        const {brand} = req.query;
        const query = {type:"female"};
        console.log('brand',brand);
        if(brand){
            query['brand']=brand;
        }
        console.log(query);
        const array_female = await Course.find(query).limit(40);
        console.log('array_female',array_female.length)
        return res.render('female', {femaleList:array_female});
    }
}

module.exports = new FemaleController;