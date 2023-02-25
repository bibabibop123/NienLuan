const Course = require('../models/Course');

class CoupleController {
    async couple ( req, res, next) {
        const array_couple = await Course.find({type:"couple"}).limit(10).lean();
        return res.render('couple', {couplelist:array_couple});
    }
}

module.exports = new CoupleController;