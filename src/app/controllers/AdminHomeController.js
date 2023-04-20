// const Course = require('../models/Course');

// class AdminHomeController {
//     async home ( req, res, next) {
//         const  courses = await Course.find({}).lean();
//         // console.log(courses)
//         return res.render('home', {courses :courses})
//     }
// }

const Course = require('../models/Course');

class AdminHomeController {
    async home ( req, res, next) {
        const products = await Course.find().lean();
        console.log('products',products);
        return res.render('admin/home', {layout:'admin',products:products});
    }

    store(  req, res, next) {
        // res.json(req.body);

        const formdata = req.body;
        const course = new Course(formdata)
        course.save()
            .then(() =>res.redirect('/'))
            .catch(error => {})
    }
}

module.exports = new AdminHomeController;