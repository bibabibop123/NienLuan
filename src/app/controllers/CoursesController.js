const Course = require('../models/Course');

class CoursesController {
    async male ( req, res, next) {
        const {brand} = req.query;
        const query = {type:"male"};
        if(brand && brand.length >0){
            query['brand']=brand;
        }
        const array_male = await Course.find(query).limit(50).lean();
        return res.render('courses', {male:array_male});
    }
    
    async listCourse(req, res, next){
        const  courses = await Course.find({}).lean();
        // console.log(courses)
        return res.render('update', {courses :courses})
    }

    async updateCourse(req, res, next){
        // res.json(req.body);
        Course.updateOne({_id: req.params.id}, req.body)
            .then (() => res.redirect('/courses/list'))
            .catch (next)
    }

    async detailCourses(req, res, next){
        const  courses = await Course.findById(req.params.id).lean();
        // console.log(courses)
        return res.render('edit', {courses :courses})
    }

    async deleteCourse(req, res, next){
        console.log('req',req.body);
        Course.deleteOne({_id: req.params.id})
            .then (() => res.redirect('back'))
            .catch (next)
    }
}

module.exports = new CoursesController;