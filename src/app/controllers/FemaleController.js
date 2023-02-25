const Course = require('../models/Course');

class FemaleController {
    async female ( req, res, next) {
        const array_female = await Course.find({type:"female"}).limit(8).lean();
        return res.render('female', {femaleList:array_female});
    }
}

module.exports = new FemaleController;