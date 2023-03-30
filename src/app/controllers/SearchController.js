const Course = require('../models/Course');

class SearchController {
    async search ( req, res, next) {

        return res.render('search');
    }
}

module.exports = new SearchController;