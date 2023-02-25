const Course = require('../models/Course');


class DetailController {
    async detail ( req, res, next) {
        // Course.findOne({name: req.params.name})
        // .then(courses => { 
        //     console.log('courses',courses);
        //     console.log(courses.img);
        //   res.render('detail', {courses :courses})
        // })
        // .catch(next);
        const  courses = await Course.findOne({name_content: req.params.name}).lean();
        return res.render('detail', {courses :courses})
    }
}

module.exports = new DetailController;